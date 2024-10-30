function doGet(e) {
  var searchTerm = e.parameter.search || "";
  var page = parseInt(e.parameter.page) || 1;
  var itemsPerPageParam = e.parameter.itemsPerPage || "100"; // Default to 100 items per page
  var itemsPerPage = itemsPerPageParam.toLowerCase() === "all" ? Number.MAX_SAFE_INTEGER : parseInt(itemsPerPageParam);
  var sheetName = e.parameter.sheet || ""; // Get the sheet name from the parameters

  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet;

  if (sheetName) {
    sheet = spreadsheet.getSheetByName(sheetName);
    if (!sheet) {
      return ContentService.createTextOutput(JSON.stringify({ error: "Sheet not found" }))
        .setMimeType(ContentService.MimeType.JSON);
    }
  } else {
    sheet = spreadsheet.getActiveSheet(); // Use the first sheet if no name is provided
  }

  var data = sheet.getDataRange().getValues();
  var filteredData = [];
  var headers = data[0];

  for (var i = 1; i < data.length; i++) {
    var row = data[i];
    var rowData = {};

    for (var j = 0; j < headers.length; j++) {
      rowData[headers[j]] = row[j];
    }

    // Check if the search term exists in any of the row values
    if (!searchTerm || JSON.stringify(rowData).toLowerCase().includes(searchTerm.toLowerCase())) {
      filteredData.push(rowData);
    }
  }

  var startIndex = (page - 1) * itemsPerPage;
  var endIndex = startIndex + itemsPerPage;
  var slicedData = filteredData.slice(startIndex, endIndex);

  var response = {
    data: slicedData,
    currentPage: page,
    totalPages: Math.ceil(filteredData.length / itemsPerPage)
  };

  var jsonString = JSON.stringify(response);

  return ContentService.createTextOutput(jsonString)
    .setMimeType(ContentService.MimeType.JSON);
}

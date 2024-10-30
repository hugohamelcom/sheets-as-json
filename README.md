# Google Sheets to JSON Web App

This project provides a Google Apps Script that converts Google Sheets data into JSON format. It allows users to access the data via a web application, with capabilities to filter by sheet name, search term, and paginate results.

## Features

- **Sheet Selection:** Choose which worksheet to fetch data from.
- **Search Capability:** Filter data by search term.
- **Pagination:** Specify the number of items per page, or fetch all data at once.
- **Default Configurations:** Defaults to the first worksheet and 100 items per page if not specified.

## Deployment

To use this script, deploy it as a web app in Google Apps Script. Follow these steps:

1. **Open the Google Apps Script Editor:**
   - Go to your Google Sheet.
   - Click on `Extensions` -> `Apps Script`.

2. **Paste the Script:**
   - Add the provided script into the editor.

3. **Save the Script:**
   - Click on the disk icon or press `Ctrl + S` to save your script.

4. **Deploy as Web App:**
   - Click on `Deploy` -> `New deployment`.
   - Choose `Web app`.
   - Enter a description.
   - Set `Execute as` to `Me`.
   - Set `Who has access` to `Anyone` or another suitable option.
   - Click `Deploy`.
   - Authorize the script to run if prompted.

5. **Get the Web App URL:**
   - After deployment, note the URL provided. This is the base URL for accessing your data.

## Usage

Access the web app using the base URL with query parameters to customize your data request.

### URL Parameters

- `sheet`: (Optional) The name of the sheet to access. Defaults to the first sheet.
- `search`: (Optional) A term to filter data.
- `page`: (Optional) The page number to retrieve, starting from 1.
- `itemsPerPage`: (Optional) Number of items per page. Use "all" to retrieve all data.

### Example URL

```
https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec?sheet=Sheet1&search=example&page=1&itemsPerPage=50
```

Replace `YOUR_DEPLOYMENT_ID` with your actual deployment ID.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Application Details
|               |
| ------------- |
|**Generation Date and Time**<br>Mon Nov 10 2025 11:04:45 GMT+0000 (Coordinated Universal Time)|
|**App Generator**<br>SAP Fiori Application Generator|
|**App Generator Version**<br>1.19.3|
|**Generation Platform**<br>SAP Business Application Studio|
|**Template Used**<br>Basic|
|**Service Type**<br>None|
|**Service URL**<br>N/A|
|**Module Name**<br>mvsplit|
|**Application Title**<br>App Title|
|**Namespace**<br>|
|**UI5 Theme**<br>sap_horizon|
|**UI5 Version**<br>1.142.0|
|**Enable Code Assist Libraries**<br>False|
|**Enable TypeScript**<br>False|
|**Add Eslint configuration**<br>False|

## mvsplit

An SAP Fiori application.

### Starting the generated app

-   This app has been generated using the SAP Fiori tools - App Generator, as part of the SAP Fiori tools suite.  To launch the generated application, run the following from the generated application directory:

```
npm start
```

#### Pre-requisites:

1. Active NodeJS LTS (Long Term Support) version and associated supported NPM version.  (See https://nodejs.org)

---

## Application Overview and Code Explanation

The FlexBox_UI5 app is a SAP Fiori application generated using the Basic template. It demonstrates a classic split view layout (master-detail pattern) common in enterprise UIs. You can view, edit, and inspect details of items from a list, such as products and accessories.

### Main Features

- **Master List**: Displays a scrollable list of items.
- **Detail View**: Shows specifics of the selected item.
- **Edit and Save**: Enables editing details, with Save and Cancel options.
- **Responsive Design**: Adapts to different screen sizes (such as mobile and desktop layouts).

---

### User Interface Flow

#### 1. Initial Mobile Layout View

<img width="505" height="881" alt="Screenshot (116)" src="https://github.com/user-attachments/assets/0fdcce67-fad4-4b65-b923-436ee88071ba" />

*Image 1: The app running in a mobile layout (iPhone SE dimensions). It displays the SAP logo, a list of items on the left, and the details of the selected item on the right. (Inspect Panel in Chrome shows relevant HTML/JS structure and console errors for debugging)*

- The left panel displays a list of products such as "Laptop Pro 15" and "Ergo Wireless Mouse".
- When a user selects "Laptop Pro 15", details are shown in the right pane.
- Errors and logs are visible on the browser's console for debugging purposes.

---

#### 2. Desktop Layout (View Mode)

<img width="1920" height="1080" alt="Screenshot (118)" src="https://github.com/user-attachments/assets/1d01f0d1-218d-4af3-a18f-0c141bad4a38" />


*Image 2: Desktop layout showing the details of "Laptop Pro 15" in read-only mode (not editable yet).*

- List on the left, item details on the right.
- The detail section shows fields like id, price, category, supplier, and description.
- Action icons (edit, delete) are available above the detail card.

---

#### 3. Editing an Item

<img width="1920" height="1080" alt="Screenshot (117)" src="https://github.com/user-attachments/assets/a72e9d9b-7d3b-4948-b1f8-cd90da4ea716" />

*Image 3: Edit state for "Ergo Wireless Mouse". The details are now in editable input fields. Save and Cancel buttons appear beneath.*

- When the edit icon is clicked, the detail view transforms into a form with input fields.
- User can modify fields such as price, category, supplier, or description.
- After editing, pressing **Save** updates the data, while **Cancel** discards changes.

---

#### 4. After Save (Details Updated)

<img width="1920" height="1080" alt="Screenshot (119)" src="https://github.com/user-attachments/assets/f9465afc-69f3-405a-9743-1202d93276b8" />

*Image 4: The details for "Ergo Wireless Mouse" after editing and saving (note the price field change).* 

- The newly updated value (price changed from 45 to 49) is reflected in the details pane.


---

### Code Structure Explanation

The application structure typically follows the SAPUI5 MVC (Model-View-Controller) pattern:

- **View Files (XML/HTML):** Define layout for master and detail sections.
- **Controller Files (JS):** Handle UI logic, user actions (edit, save, select).
- **Model Files (JSON/OData):** Store and provide data displayed and edited in the views.

In this app, the UI5 framework's split view and flex layouts are leveraged for responsive design and intuitive navigation. Events and data binding are handled in controller files, as seen in the Chrome "Sources" panel in Image 1.

---

### Debugging and Logs

As shown in Image 1, browser developer tools and console logs are useful in identifying issues (such as failed API calls, data model loading errors). Reviewing the relevant controller code (like `Master.controller.js`) can help resolve such problems.

---

## Summary

This app provides a practical demonstration for a split view SAPUI5 application with master-detail navigation, supporting both view and edit modes, and responsive layouts. Refer to the screenshots above for visual guidance through the application's workflow and UI logic.

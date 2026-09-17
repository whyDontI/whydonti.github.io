# OAuth Consent Screen Justification

## Purpose of Use for Gmail Modify Access

### Essential Functionality
Expense Tracker requires `gmail.modify` scope to read, search, and organize users' Gmail messages for bank transaction emails. This access enables both scanning emails and applying organizational labels.

### Why This Scope is Required
- **Primary Feature**: The add-on searches for emails from bank institutions containing transaction data
- **Data Source**: Bank statements and alerts are commonly delivered via email rather than direct API access
- **User Benefit**: Eliminates manual expense entry by automatically extracting transaction information
- **No Alternative**: Without Gmail access, users would need to manually forward emails or enter data, defeating the automation purpose

### Limited Data Access
- **Read & Organize**: The scope allows reading email content and applying organizational labels
- **Filtered Search**: Uses specific Gmail search queries to target only relevant bank transaction emails
- **Label Management**: Creates and applies labels to help users track processed emails
- **User Control**: Users specify exactly which bank email addresses to monitor
- **No Data Storage**: Extracted data is immediately processed into Google Sheets; no external storage

### User Experience Impact
Without `gmail.modify` access:
- Users cannot scan emails for transactions (read access blocked)
- Users cannot apply organizational labels to track processed emails
- Manual data entry becomes necessary, removing the automation and organization value
- The add-on becomes a basic spreadsheet tool rather than an intelligent expense tracker

### Security Considerations
- **Minimal Permissions**: Only requests read access, not modify/delete permissions
- **Transparent Usage**: All data access is clearly explained to users before installation
- **Google Infrastructure**: All processing occurs within Google's secure environment
- **User Consent**: Users must explicitly grant permission and can revoke access anytime

### Compliance with Google Policies
- **Limited Use**: Data is accessed only for expense tracking automation
- **User Data Policy**: Fully compliant with Google's API Services User Data Policy
- **No Data Sharing**: Transaction data remains within the user's Google account

This scope is essential for the add-on to provide its intended functionality of automated expense tracking from email sources.
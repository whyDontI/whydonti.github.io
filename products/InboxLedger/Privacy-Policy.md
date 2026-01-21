# Privacy Policy - Expense Tracker Add-on

**Last Updated:** January 20, 2026

## Overview

Expense Tracker is a Google Workspace Add-on that helps users automatically track personal expenses by scanning bank transaction emails in their Gmail inbox. This privacy policy explains how we handle user data and comply with Google's API Services User Data Policy.

## Data Collection and Usage

### What Data We Access
Expense Tracker accesses the following data through authorized Google APIs:

- **Gmail Messages**: Read and organize access to email content and metadata for bank transaction emails
- **Google Sheets**: Write access to create and modify spreadsheets for expense tracking

### How Data is Used
- Transaction data from bank emails is extracted and organized into expense categories
- All data remains within the user's Google account and Google servers
- No data is transmitted to external servers or third-party services (except OpenAI API for transaction categorization)
- Data is only used to populate the user's own Google Sheets spreadsheet

## Google API Services Compliance

### User Data Policy Compliance
Expense Tracker fully complies with Google's API Services User Data Policy:

- **Limited Use**: Data is accessed only for the specific purpose of expense tracking automation
- **No Data Retention**: No user data is stored on external servers; everything remains in Google services
- **User Control**: Users have full control over their data and can revoke access at any time
- **Transparency**: All data access is clearly explained to users before installation

### OAuth Scopes Used
We request the necessary permissions for full functionality:

- `https://www.googleapis.com/auth/gmail.modify`: Read, search, and organize emails (for scanning and labeling bank transactions)
- `https://www.googleapis.com/auth/spreadsheets`: Create and modify Google Sheets (for expense logging)

## Data Security

- All processing occurs within Google's secure infrastructure
- No personal data is stored outside of the user's Google account
- OpenAI API calls (for transaction categorization) are encrypted and temporary
- Users retain full ownership and control of their data

## Third-Party Services

Expense Tracker uses OpenAI's API to help categorize expenses from transaction descriptions. This data is:
- Transmitted securely via HTTPS
- Not stored by OpenAI beyond the processing request
- Used only for categorization purposes
- Not shared with any other third parties

## User Rights

Users have the right to:
- View and control what data is accessed
- Revoke the add-on's permissions at any time
- Delete their data by uninstalling the add-on
- Contact us with privacy concerns

## Contact Information

For privacy-related questions or concerns:

- **Developer:** Nikhil
- **Email:** nikhilbhandarkar1998@gmail.com
- **Website:** https://nikhilbuilds.xyz

## Changes to This Policy

We may update this privacy policy occasionally. Users will be notified of significant changes through the Google Workspace Marketplace.

---

*This add-on is designed for personal finance tracking and is not intended for business or commercial use.*
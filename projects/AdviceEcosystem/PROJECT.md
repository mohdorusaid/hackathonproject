# Project: User Authentication Platform

## Project Overview
This project manages user authentication and access control for a web
application. It includes login, logout, password management, session handling,
and basic authorization checks.

The system is user-facing and security-sensitive.

## Domain Assumptions
- Users authenticate using email and password
- Authentication is required to access protected areas
- Sessions expire after inactivity
- Error messages should not expose sensitive information

## Expected User Story Types
- User login and logout
- Invalid credential handling
- Password reset and change
- Session timeout and re-authentication
- Access control for authenticated vs unauthenticated users

## Test Case Scope
- Focus on functional behavior visible to the user
- Include both UI and API-level behavior where relevant
- Assume standard validation exists on both frontend and backend
- Do not test internal implementation details

## Critical Validation Rules
- Email format must be validated
- Password rules must be enforced
- Authentication failures must return appropriate error messages
- Security-sensitive scenarios must include negative test cases

## Edge Case Expectations
Always consider:
- Empty inputs
- Maximum and minimum allowed lengths
- Special characters
- Repeated or rapid user actions
- Session expiry during active usage

## Output Format Requirements
- Group test cases under the following headings:
  - Functional Test Cases
  - Negative Test Cases
  - Edge Test Cases
- Use numbered lists
- One test case per line
- Use clear, action-oriented language
- Do not include test data unless explicitly required
- Do not include explanations or assumptions

## Example Output Style
Functional Test Cases:
1. Verify user can log in with valid email and password
2. Verify user is redirected to the dashboard after successful login

Negative Test Cases:
1. Verify login fails with incorrect password
2. Verify appropriate error message is shown for unregistered email

Edge Test Cases:
1. Verify login with maximum allowed email length
2. Verify session expires after configured inactivity period

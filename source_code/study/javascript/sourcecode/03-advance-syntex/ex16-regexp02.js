const text = `
Emails:
- alice@example.com
- bob.smith@company.co.uk
- charlie@university.edu
- dave123@domain.net

Phone Numbers:
- (123) 456-7890
- 123-456-7890
- +1-800-555-5555
- 800.555.5555

Addresses:
- 123 Main St, Anytown, USA
- 456 Elm St, Smallville, USA
- 789 Oak St, Springfield, USA

Dates:
- 2023-07-04
- 04/07/2023
- July 4, 2023
- 4th of July, 2023

IP Addresses:
- 192.168.1.1
- 10.0.0.1
- 172.16.0.1
- 255.255.255.255

URLs:
- https://www.example.com
- http://example.com
- ftp://ftp.example.com
- www.example.com

Credit Card Numbers:
- 4111 1111 1111 1111
- 5500 0000 0000 0004
- 3400 0000 0000 009
- 3000 0000 0000 04

Random Text:
- The quick brown fox jumps over the lazy dog.
- Lorem ipsum dolor sit amet, consectetur adipiscing elit.
- 1234567890
- ABCDEFGHIJKLMNOPQRSTUVWXYZ
- abcdefghijklmnopqrstuvwxyz
`

// 정규식 예시
const emailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
const emails = text.match(emailPattern);
console.log("Emails:", emails);

const phonePattern = /\+?\d{0,3}[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/g;
const phoneNumbers = text.match(phonePattern);
console.log("Phone Numbers:", phoneNumbers);

const addressPattern = /\d{1,3}\s\w+\s\w+,?\s\w+,?\s\w+/g;
const addresses = text.match(addressPattern);
console.log("Addresses:", addresses);

const datePattern = /\b\d{4}[-/]\d{2}[-/]\d{2}\b|\b\d{2}[/]\d{2}[/]\d{4}\b|\b\w+\s\d{1,2},\s\d{4}\b|\b\d{1,2}(?:st|nd|rd|th)\s\w+,\s\d{4}\b/g;
const dates = text.match(datePattern);
console.log("Dates:", dates);

const ipPattern = /\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/g;
const ipAddresses = text.match(ipPattern);
console.log("IP Addresses:", ipAddresses);

const urlPattern = /(https?|ftp):\/\/[^\s/$.?#].[^\s]*/g;
const urls = text.match(urlPattern);
console.log("URLs:", urls);

const creditCardPattern = /\b\d{4}\s?\d{4}\s?\d{4}\s?\d{4}\b/g;
const creditCards = text.match(creditCardPattern);
console.log("Credit Card Numbers:", creditCards);

const randomTextPattern = /[A-Za-z]+|[0-9]+/g;
const randomTexts = text.match(randomTextPattern);
console.log("Random Texts:", randomTexts);
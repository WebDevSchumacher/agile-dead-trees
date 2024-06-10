const invoiceDB = require('../lib/invoiceDB');
const invoice = require('easyinvoice');

const createInvoice = async invoiceData => {
    const data = {
        //"documentTitle": "RECEIPT", //Defaults to INVOICE
        "currency": "USD",
        "taxNotation": "vat", //or gst
        "marginTop": 25,
        "marginRight": 25,
        "marginLeft": 25,
        "marginBottom": 25,
        "sender": {
            "company": "Sample Corp",
            "address": "Sample Street 123",
            "zip": "1234 AB",
            "city": "Sampletown",
            "country": "Samplecountry"
            //"custom1": "custom value 1",
            //"custom2": "custom value 2",
            //"custom3": "custom value 3"
        },
        "client": {
            "company": "Client Corp",
            "address": "Clientstreet 456",
            "zip": "4567 CD",
            "city": "Clientcity",
            "country": "Clientcountry"
            //"custom1": "custom value 1",
            //"custom2": "custom value 2",
            //"custom3": "custom value 3"
        },
        "invoiceNumber": "2020.0001",
        "invoiceDate": "05-01-2020",
        "products": [
            {
                "quantity": "2",
                "description": "Test1",
                "tax": 6,
                "price": 33.87
            },
            {
                "quantity": "4",
                "description": "Test2",
                "tax": 21,
                "price": 10.45
            }
        ],
        "bottomNotice": "Kindly pay your invoice within 15 days."
    };
    //await fs.writeFileSync("invoice.pdf", result.pdf, 'base64');
    return await invoice.createInvoice(data, function (result) {
        invoiceDB.invoiceToDB({invoice: result, bookID: invoiceData.bookID, userID: invoiceData.userID});
    });
}
module.exports = {
    createInvoice
}
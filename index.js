const makePaymentTemplate = require('./simple')
const listAllBooks = require('./carousel')

let paymentMsgTemplate = makePaymentTemplate('Please process to payment', '300 THB for the exhibition ticket. Please process to payment', 'http://payment.example.com', 'en')

console.log(JSON.stringify(paymentMsgTemplate.contents))
console.log()


let books = [
  {
    coverImage: "https://images-na.ssl-images-amazon.com/images/I/51WycCtUa8L._SY382_BO1,204,203,200_.jpg",
    title: "Ralph Tells a Story",
    description: "Delightful unreserved impossible few estimating men favourable see entreaties. She propriety immediate was improving. He or entrance humoured likewise moderate. Much nor game son say feel. Fat make met can must form into gate. Me we offending prevailed discovery.",
    unitPrice: 3.99,
    unitPriceCurrency: 'USD',
    readerLink: "http://reader.example.com",
    link: "http://link.example.com",
  },
  {
    coverImage: "https://images-na.ssl-images-amazon.com/images/I/51-xUGTf54L._SX404_BO1,204,203,200_.jpg",
    title: "You Are Not Small",
    description: "Boy desirous families prepared gay reserved add ecstatic say. Replied joy age visitor nothing cottage. Mrs door paid led loud sure easy read. Hastily at perhaps as neither or ye fertile tedious visitor. Use fine bed none call busy dull when. Quiet ought match my right by table means. Principles up do in me favourable affronting. Twenty mother denied effect we to do on.",
    unitPrice: 3.99,
    unitPriceCurrency: 'USD',
    readerLink: "http://reader.example.com",
    link: "http://link.example.com",
  },
  {
    coverImage: "https://images-na.ssl-images-amazon.com/images/I/51SIK6%2BKEML._SY410_BO1,204,203,200_.jpg",
    title: "Down by the Barn",
    description: "Death there mirth way the noisy merit. Piqued shy spring nor six though mutual living ask extent. Replying of dashwood advanced ladyship smallest disposal or. Attempt offices own improve now see. Called person are around county talked her esteem. Those fully these way nay thing seems. ",
    unitPrice: 3.99,
    unitPriceCurrency: 'USD',
    readerLink: "http://reader.example.com",
    link: "http://link.example.com",
  }
]

let booksMsgtemplate = listAllBooks(books, "en")
console.log(JSON.stringify(booksMsgtemplate.contents))
console.log()
const { FlexMessageBuilder, FlexComponentBuilder } = require('@catcatio/line-flex-builder')

const limitChar = (str, limit) => {
  return `${str.substr(0, limit)}${str.length > limit ? '...' : ''}`
}

const listAllBooks = (books, languageCode) => {
  const lineTemplate = new FlexMessageBuilder()
  const template = lineTemplate.flexMessage(`book shelf`)
    .addCarousel()

  books.forEach(book => {
    template.addBubble()
      .addHero(FlexComponentBuilder.flexImage()
        .setUrl(book.coverImage)
        .setSize('full')
        .setAspectRatio('16:9')
        .setAspectMode('cover')
        .build())
      .addBody()
      .setLayout('vertical')
      // title
      .addComponents(
        FlexComponentBuilder.flexBox()
          .setLayout('horizontal')
          .addContents(
            FlexComponentBuilder.flexText()
              .setText(book.title)
              // .setWrap(true)
              .setWeight('bold')
              .build()
          )
          .build()
      )
      // teaser
      .addComponents(
        FlexComponentBuilder.flexBox()
          .setMargin('md')
          .setLayout('horizontal')
          .addContents(
            FlexComponentBuilder.flexText()
              .setText(limitChar(book.description, 64))
              .setSize('sm')
              .setWrap(true)
              .setMaxLines(3)
              .build()
          )
          .build()
      )
      // price
      .addComponents(
        FlexComponentBuilder.flexBox()
          .setMargin('md')
          .setLayout('horizontal')
          .addContents(
            FlexComponentBuilder.flexText()
              .setText(`💵  ${book.unitPrice > 0 ? `${book.unitPrice} ${book.unitPriceCurrency}` : 'FREE'}`)
              .setWrap(true)
              .setColor('#222222')
              .setWeight('bold')
              .setSize('xs')
              .build()
          )
          .build()
      )
      .addFooter()
      .setLayout("vertical")
      .addComponents(
        FlexComponentBuilder.flexBox()
          .setLayout('vertical')
          .addContents(
            FlexComponentBuilder.flexButton()
              .setStyle('primary')
              .setColor('#718792')
              .setAction(book.unitPrice > 0
                ? {
                  type: 'message',
                  label: languageCode === 'th' ? 'สั่งซื้อ' : 'PURCHASE',
                  text: languageCode === 'th' ? `ซื้อหนังสือ ${book.title}` : `purchase ${book.title}`
                }
                : {
                  type: 'uri',
                  label: 'REEEED',
                  uri: book.readerLink
                })
              .build(),
            FlexComponentBuilder.flexButton()
              .setAction({
                'type': 'uri',
                'label': languageCode === 'th' ? 'เพิ่มเติม' : 'MORE',
                'uri': book.link
              })
              .build()
          )
          .build()
      )
      .build()
  })

  template.addBubble()
    .addHero(FlexComponentBuilder.flexImage()
      .setUrl(`https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Grey_matter_and_white_matter_-_very_high_mag.jpg/1200px-Grey_matter_and_white_matter_-_very_high_mag.jpg`)
      .setSize('full')
      .setAspectRatio('16:9')
      .setAspectMode('cover')
      .build())
    .addBody()
    .setLayout('vertical')
    // title
    .addComponents(
      FlexComponentBuilder.flexBox()
        .setLayout('horizontal')
        .addContents(
          FlexComponentBuilder.flexText()
            .setText('  ')
            // .setWrap(true)
            .setWeight('bold')
            .build()
        )
        .build()
    )
    // teaser
    .addComponents(
      FlexComponentBuilder.flexBox()
        .setMargin('md')
        .setLayout('horizontal')
        .addContents(
          FlexComponentBuilder.flexText()
            .setText('  ')
            .setSize('sm')
            .setWrap(true)
            .setMaxLines(3)
            .build()
        )
        .build()
    )
    // price
    .addComponents(
      FlexComponentBuilder.flexBox()
        .setMargin('md')
        .setLayout('horizontal')
        .addContents(
          FlexComponentBuilder.flexText()
            .setText('  ')
            .setWrap(true)
            .setColor('#222222')
            .setWeight('bold')
            .setSize('xs')
            .build()
        )
        .build()
    )
    .addFooter()
    .setLayout("vertical")
    .addComponents(
      FlexComponentBuilder.flexBox()
        .setLayout('vertical')
        .addContents(
          FlexComponentBuilder.flexButton()
            .setStyle('primary')
            .setColor('#718792')
            .setAction({
              type: 'uri',
              label: languageCode === 'th' ? 'ดูทั้งหมด' : 'MORE',
              uri: 'http://seemore.example.com'
            })
            .build(),
        )
        .build()
    )
    .build()

  return template.build()
}

module.exports = listAllBooks
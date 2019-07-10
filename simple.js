const { FlexMessageBuilder, FlexComponentBuilder } = require('@catcatio/line-flex-builder')

const makePaymentTemplate = (title, message, paymentLink, languageCode) => {
  const lineTemplate = new FlexMessageBuilder()
  const template = lineTemplate.flexMessage('Payment')
    .addBubble()
    .addHeader()
    .addComponents(
      FlexComponentBuilder.flexBox()
        .setLayout('horizontal')
        .addContents(FlexComponentBuilder.flexText()
          .setText(title)
          .setWeight('bold')
          .setSize('sm')
          .build())
        .build()
    )
    .addBody()
    .setStyleBackgroundColor('#EFEFEF')
    .setStyleSeparator(true)
    .setStyleSeparatorColor('#DDDDDD')
    .setLayout('vertical')
    .setSpacing('md')
    .addComponents(
      FlexComponentBuilder.flexText()
        .setText(message)
        .setWrap(true)
        .setSize('sm')
        .build()
    )
    .addFooter()
    .setStyleSeparator(true)
    .setStyleSeparatorColor('#DDDDDD')
    .setLayout('horizontal')
    .setSpacing('md')
    .addComponents(
      FlexComponentBuilder.flexButton()
        .setStyle('secondary')
        .setColor('#b0bec5')
        .setAction({
          'type': 'uri',
          'label': languageCode === 'th' ? 'จ่ายด้วย LINE Pay' : 'Pay by LINE Pay',
          'uri': paymentLink
        })
        .build(),
    )

  return template.build()
}

module.exports = makePaymentTemplate
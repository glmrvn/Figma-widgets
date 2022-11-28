// This is a counter widget with buttons to increment and decrement the number.

const { widget } = figma
const { useSyncedState, usePropertyMenu, AutoLayout, Text, SVG, Image } = widget

var title = [
  "1. Good design is innovative",
  "2. Good design makes a product useful",
  "3. Good design is aesthetic",
  "4. Good design makes a product understandable",
  "5. Good design is unobtrusive",
  "6. Good design is honest",
  "7. Good design is long-lasting",
  "8. Good design is thorough down to the last detail",
  "9. Good design is environmentally friendly",
  "10. Good design is as little design as possible"
]

var subtitle = [
  "The possibilities for innovation are not, by any means, exhausted. Technological development is always offering new opportunities for innovative design. But innovative design always develops in tandem with innovative technology, and can never be an end in itself.",
  "A product is bought to be used. It has to satisfy certain criteria, not only functional, but also psychological and aesthetic. Good design emphasises the usefulness of a product whilst disregarding anything that could possibly detract from it.",
  "The aesthetic quality of a product is integral to its usefulness because products we use every day affect our person and our well-being. But only well-executed objects can be beautiful.",
  "It clarifies the products structure. Better still, it can make the product talk. At best, it is self-explanatory.",
  "Products fulfilling a purpose are like tools. They are neither decorative objects nor works of art. Their design should therefore be both neutral and restrained, to leave room for the users self-expression.",
  "It does not make a product more innovative, powerful or valuable than it really is. It does not attempt to manipulate the consumer with promises that cannot be kept.",
  "It avoids being fashionable and therefore never appears antiquated. Unlike fashionable design, it lasts many years - even in today's throwaway society.",
  "Nothing must be arbitrary or left to chance. Care and accuracy in the design process show respect towards the consumer.",
  "Design makes an important contribution to the preservation of the environment. It conserves resources and minimises physical and visual pollution throughout the lifecycle of the product.",
  "Less, but better - because it concentrates on the essential aspects, and the products are not burdened with non-essentials. Back to purity, back to simplicity."
]

var image = [
  "https://designwanted.com/wp-content/uploads/2022/02/dieter-rams-5-scaled.jpg",
  "https://dasprogramm.imgix.net/products/braun/376/TP1_01.jpg",
  "https://dasprogramm.imgix.net/products/braun/104/ABW30_black%2001.jpg",
  "https://dasprogramm.imgix.net/products/braun/394/PS1000_01.jpg",
  "https://dasprogramm.imgix.net/products/braun/206/phase1%28white%29%2003.jpg",
  "https://dasprogramm.imgix.net/products/braun/164/HLD1000%2001.jpg",
  "https://dasprogramm.imgix.net/products/braun/145/ET55%28apple%29%2002.jpg",
  "https://designwanted.com/wp-content/uploads/2022/02/dieter-rams-9.jpg",
  "https://dasprogramm.imgix.net/products/braun/228/TFG%202%20%28boxed1%29%2001.jpg",
  "https://designwanted.com/wp-content/uploads/2022/02/dieter-rams-7.jpg"
]

function Widget() {
  const [count, setCount] = useSyncedState('count', 0)
  var i = 0

  if (count !== 0) {
    usePropertyMenu(
      [
        {
          itemType: 'action',
          propertyName: 'reset',
          tooltip: 'Reset',
          icon: `<svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9026 1.43168C12.1936 1.47564 12.4822 1.54098 12.7663 1.62777L12.7719 1.62949C14.0176 2.0114 15.109 2.78567 15.8858 3.83854L15.8918 3.84665C16.5473 4.73808 16.9484 5.78867 17.058 6.88508L14.0863 4.88858L13.3259 6.02047L17.3852 8.74774L17.9079 9.09894L18.2994 8.60571L21.0056 5.19662L19.9376 4.34879L18.3531 6.34479C18.3424 6.27511 18.3306 6.20563 18.3179 6.13636C18.1135 5.02233 17.6601 3.96334 16.9851 3.04274L16.9791 3.03462C16.0303 1.74427 14.6956 0.794984 13.1714 0.326388L13.1658 0.32466C12.8171 0.217755 12.4627 0.137298 12.1055 0.0832198C10.899 -0.0994351 9.66061 0.0188515 8.50099 0.435448L8.4947 0.437711C7.42511 0.823053 6.46311 1.44778 5.6774 2.25801C5.38576 2.55876 5.11841 2.88506 4.87886 3.23416C4.85856 3.26376 4.83845 3.29351 4.81854 3.32343L5.94262 4.08294L5.94802 4.07484C5.96253 4.0531 5.97717 4.03146 5.99195 4.00993C6.71697 2.95331 7.75331 2.15199 8.95541 1.72013L8.9617 1.71788C9.33245 1.58514 9.71301 1.48966 10.098 1.43156C10.6957 1.34135 11.3039 1.34123 11.9026 1.43168ZM3.70034 6.39429L0.994141 9.80338L2.06217 10.6512L3.64663 8.65521C3.65741 8.72489 3.66916 8.79437 3.68187 8.86364C3.88627 9.97767 4.33964 11.0367 5.01467 11.9573L5.02063 11.9654C5.96945 13.2557 7.30418 14.205 8.82835 14.6736L8.83398 14.6753C9.18281 14.7823 9.53732 14.8628 9.89464 14.9168C11.101 15.0994 12.3393 14.9811 13.4988 14.5646L13.5051 14.5623C14.5747 14.1769 15.5367 13.5522 16.3224 12.742C16.614 12.4413 16.8813 12.115 17.1209 11.7659C17.1412 11.7363 17.1613 11.7065 17.1812 11.6766L16.0571 10.9171L16.0518 10.9252C16.0372 10.9469 16.0225 10.9686 16.0078 10.9902C15.2827 12.0467 14.2464 12.848 13.0444 13.2799L13.0381 13.2821C12.6673 13.4149 12.2868 13.5103 11.9018 13.5684C11.3041 13.6587 10.6958 13.6588 10.0971 13.5683C9.8062 13.5244 9.51754 13.459 9.23347 13.3722L9.22784 13.3705C7.98212 12.9886 6.89078 12.2143 6.11393 11.1615L6.10795 11.1534C5.45247 10.2619 5.05138 9.21133 4.94181 8.11492L7.91342 10.1114L8.6739 8.97953L4.61459 6.25226L4.09188 5.90106L3.70034 6.39429Z" fill="white"/>
          </svg>
          `,
        },
      ],
      () => {
        setCount(0)
      },
    )
  }

  return (
    <AutoLayout
      direction={"vertical"}
      verticalAlignItems={'center'}
      horizontalAlignItems={"center"}
      spacing={16}
      padding={32}
      cornerRadius={24}
      fill={'#FFFFFF'}
      stroke={'#E6E6E6'}
    >
      <Image
        // Pass a data uri directly as the image
        src={image[count]}
        cornerRadius={20}
        width={320}
        height={320}
      />

      <Text fontSize={32} width={420} horizontalAlignText={'center'}>
        {title[count]}
      </Text>

      <Text fontSize={18} width={420} horizontalAlignText={'center'} fill={'#000000'}>
        {subtitle[count]}
      </Text>

      <SVG
        src={`<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.7841 30.2045L18.7386 28.1818L25.8409 21.0795H8V18.125H25.8409L18.7386 11.0341L20.7841 9L31.3864 19.6023L20.7841 30.2045Z" fill="black"/>
        </svg>`}
        onClick={() => {
          setCount(count + 1)
           if (count > 8) {
            setCount(0)
          }
        }}
      ></SVG>
    </AutoLayout>
  )
}

widget.register(Widget)

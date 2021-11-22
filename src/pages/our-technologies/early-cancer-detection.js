import React from 'react'
import { makeStyles, Container } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import TitleDot from '@themes/components/TitleDot'
import { StaticImage } from 'gatsby-plugin-image'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
}))

const centerData = [
  '20-44 歲男士頭號癌症¹',
  '50-60歲女士也會出現的癌症 (除乳癌、子宮頸癌等常見癌症)²',
  '普遍見於較年輕的「金齡一族」(50至65歲之間) 的癌症，有別於大腸癌、肝癌和前列腺癌患者，這些癌症逾8成發病期常見於較高齡的「銀髮期」(65-80歲之間)³',
]

const references = [
  '1Overview of Hong Kong Cancer Statistics of 2018. Hong Kong Hospital Authority, October 2020.',
  '2Hong Kong Cancer Registry. Hong Kong Hospital Authority, www3.ha.org.hk/cancereg/. Accessed 23 May 2021.',
  '3認識癌症：鼻咽癌. Hong Kong Cancer Fund, 2021, www.cancer-fund.org/wp-content/uploads/2021/03/NPC-20C-Revamp-Web_s.pdf.',
]

const EarlyCancerDetection = () => {
  const classes = useStyles()
  const reasons = [
    {
      icon: '../../assets/images/icons/reason/symptoms.svg',
      title: '鼻咽癌不易察覺',
      content: '鼻咽位置較「隱蔽」，難以被察覺，部分徵狀容易與感冒或炎症混淆',
    },
    {
      icon: '../../assets/images/icons/reason/vaccine.svg',
      title: '鼻咽癌不能預防',
      content: '目前尚無疫苗預防鼻咽癌',
    },
    {
      icon: '../../assets/images/icons/reason/pills.svg',
      title: '沒有特效藥',
      content:
        '目前並未有專門針對鼻咽癌的治療和特效藥（根據癌症不同期數，電療和化療為主要治療方式）',
    },
  ]
  return (
    <Container className={classes.root} maxWidth='md'>
      <Box>
        <Box>認識早期鼻咽癌篩查</Box>
        <Box bgcolor='primary.main' color='primary.contrastText'>
          <Box>你知道嗎？</Box>
          <Box>其實，任何年紀的人都有可能患上鼻咽癌！</Box>
          <Box>根據香港癌症資料統計中心數據顯示，鼻咽癌是：</Box>
        </Box>
        <Box>
          {centerData.map((item, index) => (
            <Box key={index}>{item}</Box>
          ))}
        </Box>
        <Box>
          許多人聞癌色變，因為患癌可能會為人生帶來很多變數，但是隨著科技發達，我們雖然不能直接「預防」癌症，卻能「提防」患癌，例如定期進行早期癌症篩查，就是一個及時了解自己身體狀況的好習慣。
        </Box>
        <Box>
          {references.map((reference, index) => (
            <Box key={index}>{reference}</Box>
          ))}
        </Box>
      </Box>
      <Box>
        <Box>什麼是早期鼻咽癌篩查？</Box>
        <Box>
          <Box>
            <TitleDot></TitleDot>
            在醫學中，篩查是一種用於尋找尚未發現的疾病的策略。受測者可能沒有徵狀或者只有輕微徵狀，而這些徵狀本身並不能確定診斷。受測者可以透過篩查去確定自己的身體狀況有沒有潛在風險，會否在將來某個時候轉變為疾病，從而能夠及早進行干預和管理，以降低死亡率和患病痛苦。篩查程序中使用的測試還必須具有良好的靈敏度及特異性，以減少出現誤診和產生錯誤的安全感。
            <br />
            早期鼻咽癌篩查一般適用於還沒有或病徵不明顯的人群。新式早期鼻咽癌篩查以抽血方式，配合嶄新的次世代DNA測序技術
            (Next-generation
            Sequencing)，來分析血漿中是否帶有鼻咽癌特徵的DNA，從而有效找出早期鼻咽癌患者，讓患者能在發病初期確診並接受治療，能大大增加成功治癒的機會及減少治療帶來的副作用。
          </Box>
        </Box>
      </Box>
      <Box>
        <Box>及早進行早期鼻咽癌篩查的三大原因</Box>
        <Box>
          {reasons.map((reason) => (
            <Box key={reason.title}>
              <Box>
                <StaticImage src={reason.icon} alt={reason.title}></StaticImage>
              </Box>
              <Box>{reason.title}</Box>
              <Box>{reason.content}</Box>
            </Box>
          ))}
        </Box>
        <Box>
          我們期望透過推廣早期癌症篩查，建立市民的健康意識，如提升對癌症、檢測技術、個人健康管理的認知，並致力推動醫學創新研究，讓患者更有效進行健康管理，從而自信地活出精彩人生。
        </Box>
      </Box>
    </Container>
  )
}

export default EarlyCancerDetection

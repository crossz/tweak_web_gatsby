import React from 'react'
import { makeStyles, Container } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import { StaticImage } from 'gatsby-plugin-image'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
}))
const Mission = () => {
  const classes = useStyles()
  const beliefs = [
    {
      image: (
        <StaticImage
          src='../../assets/images/belief_01.jpg'
          alt='belief 01'
        ></StaticImage>
      ),
      type: '企業與品牌信念',
      slogan: '我們旨在引領生物科技行業發展，改寫人類對健康的認知。',
      content:
        '我們身處一個科學躍進、突破常規的時代；只有在科研和數碼領域力求創新，以實用的資訊持續改善人類的健康和生活，才能為世界帶來實在的改變。 因此，我們引領卓越，聚集頂尖的人才和科技，組成專業團隊；捉緊機遇、釋放潛能，提供嶄新的科技和實用的資訊，確立世界對健康的看法和需求，引領亞洲邁向健康的新紀元。 與此同時，我們相信每個人都值得擁有健康無憂的人生，能透過學習、啟發和經驗，掌握健康，創造屬於自己的理想生活。 ',
    },
    {
      image: (
        <StaticImage
          src='../../assets/images/belief_02.jpg'
          alt='belief 02'
        ></StaticImage>
      ),
      type: '我們的使命',
      slogan: '我們旨在成為癌症檢測的翹楚，協助及早驗出癌症。',
      content:
        '不論年紀、性別、背景等等，任何人士一但罹患癌症，都會感到不知所措，猶如晴天霹靂一樣。倘若我們能夠及早發現癌症，便能克服未知，迎難而上。為此，我們借助高端科技和醫療人員的專業知識，致力提供早期癌症篩查服務，通過提供實用的資訊，助你了解早期癌症篩查及其重要性，讓你能「提防」患癌；即使不幸發現癌症，亦能及早進行治療，大大減低後期繁複、密集治療為生活帶來的影響，提高成功治癒的機會和存活率，繼續活出精彩人生。',
    },
  ]
  return (
    <Container className={classes.root} maxWidth='xl'>
      <Box>
        <Box>企業與品牌信念</Box>
        <Box>
          {beliefs.map((belief, index) => (
            <Box key={index}>
              <Box>{belief.image}</Box>
              <Box>
                <Box>{belief.type}</Box>
                <Box>{belief.slogan}</Box>
                <Box>{belief.content}</Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      <Box>
        <Box>創辦人及行政總裁</Box>
        <Box>
          <Box>
            <Box>
              <StaticImage
                src='../../assets/images/founder_01.jpg'
                alt='founder 01'
              ></StaticImage>
            </Box>
            <Box>翁錦輝先生</Box>
            <Box>行政總裁</Box>
          </Box>
          <Box>
            <Box>背景及創辦人</Box>
            <Box>
              得易健康奠基於亞洲區頂尖大學的科研成果，是將一流學術成果轉化為商業應用並發揚光大的一所典範企業。我們的創辦人是來自香港中文大學醫學院化學病理學系的三位教授，二十多年來紮根香港、影響世界，在基因及疾病檢測領域深耕研究、成果豐碩。2019年，教授團隊正式創建得易健康，並宣佈公司首項工作為開發早期鼻咽癌檢測產品，以此為公司的根基，謀求未來更多的發展和貢獻社會的機會。
              <br />
              有關三位教授創辦得易健康並發佈公司首項產品的資訊，請參閱以下新聞連結：
              <br />
              https://www.businesswire.com/news/home/20190506005296/zh-HK/
            </Box>
            <Box>我們的工作團隊</Box>
            <Box>
              我們的工作團隊
              得易健康的工作團隊來自世界不同地方，團結於公司的使命，並日益壯大成長。對於公司未來發展方向，得易健康行政總裁翁錦輝先生表示︰「能夠將世界一流學者的研究成果付諸民生應用、影響社會，我們深感自豪。我們的員工有理想、有活力、有朝氣，致力成為醫療界別的開拓者，秉持積極創新、一絲不苟的理念和風格，勇於嘗試、突破傳統醫學科技的界限，努力為人類健康帶來切實、根本的改變。」
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

export default Mission

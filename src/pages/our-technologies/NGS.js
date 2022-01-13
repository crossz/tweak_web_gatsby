import React, { useState } from 'react'
import {
  makeStyles,
  Container,
  alpha,
  useTheme,
  useMediaQuery,
  Hidden,
  Grid,
} from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import TitleDot from '@themes/components/TitleDot'
import { StaticImage } from 'gatsby-plugin-image'
import classnames from 'classnames'

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(10.25),
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(5),
      paddingBottom: 0,
    },
  },
  banner: {
    borderRadius: theme.spacing(0.75),
    overflow: 'hidden',
  },
  sectionOneWrapper: {
    backgroundColor: alpha(theme.palette.primary.main, 0.03),
    padding: theme.spacing(6.25, 1.5),
    borderRadius: theme.spacing(1.5),
    color: theme.palette.text.primary,
    fontSize: theme.typography.body1.fontSize,
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(4),
      backgroundColor: 'transparent',
      fontSize: theme.typography.body2.fontSize,
      paddingBottom: theme.spacing(6),
    },
  },
  sectionTwoWrapper: {
    marginTop: theme.spacing(7),
    backgroundColor: alpha(theme.palette.primary.main, 0.03),
    padding: theme.spacing(9.5, 3),
    [theme.breakpoints.down('xs')]: {
      marginTop: 0,
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(1),
    },
  },
  noteTab: {
    fontSize: theme.typography.subtitle1.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(2.5),
  },
  noteTabActive: {
    color: theme.palette.supporting.supporting01,
  },
  noteItem: {
    boxShadow: `0px 15px 40px -10px ${alpha(theme.palette.common.black, 0.05)}`,
    display: 'flex',
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.spacing(0.75),
    overflow: 'hidden',
    [theme.breakpoints.down('xs')]: {
      display: 'block',
    },
    marginBottom: theme.spacing(10),
  },
  noteContent: {
    paddingLeft: theme.spacing(10.25),
    paddingRight: theme.spacing(7),
    paddingTop: theme.spacing(4.25),
    paddingBottom: theme.spacing(4.25),
    color: theme.palette.text.primary,
    fontSize: theme.typography.body1.fontSize,
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(3),
      fontSize: theme.typography.body2.fontSize,
    },
  },
  noteImage: {
    height: '100%',
    borderRadius: theme.spacing(0.75),
    overflow: 'hidden',
    [theme.breakpoints.down('xs')]: {
      borderRadius: 0,
      height: 184,
    },
  },
}))

const notes = [
  {
    title: '我們如何應用 NGS技術，以進行早期鼻咽癌篩查？',
    content:
      'Take2 Prophecy™ 早期鼻咽癌篩查結合PCR及次世代DNA測序技術 (NGS: Next-generation Sequencing) 來檢測血漿中人類和EB病毒的DNA與鼻咽癌相關之特徵，並利用精密的演算法進行數據分析，讓醫生能識別出早期鼻咽癌患者，提高患者成功治癒的可能性及存活率³。',
    image: (
      <StaticImage
        style={{
          height: '100%',
        }}
        src='../../assets/images/1_how_do_we_use_ngs.jpg'
        alt='how do we use ngs'
      ></StaticImage>
    ),
  },
  {
    title: '以組織活檢檢測鼻咽癌的局限',
    content:
      '組織活檢為癌症臨床診斷的金標準，由受過專業訓練的醫生以鼻內視鏡抽取鼻腔組織，再進行細胞分析。這類方法具入侵性，不易用於所有身體部位；加上腫瘤細胞會隨著時間變化，而組織活檢只能代表檢測當下取得的腫瘤細胞的情況，故僅能提供有限的腫瘤資料；再者，組織活檢不能頻繁、重覆地使用以監測疾病的進展；有凝血障礙的人士在抽取組織的過程中也有較高的出血風險。因此，組織活檢存在不同方面的缺陷。',
    image: (
      <StaticImage
        style={{
          height: '100%',
        }}
        src='../../assets/images/2_endoscopy.png'
        alt='endoscopy'
      ></StaticImage>
    ),
  },
  {
    title: '傳統EB病毒檢測難以準確檢測出鼻咽癌',
    content:
      '除了透過鼻內視鏡進行組織活檢外，抽血驗EB病毒 (Epstein-Barr Virus) 也是常見的鼻咽癌檢測手段，因為鼻咽癌與EB病毒關係非常密切。兩種最常用的檢測方法包括血清學檢測和通過定量PCR測量血漿中的EB病毒DNA數值，然而EB病毒感染非常普遍，病毒或抗體的存在可能僅代表短暫感染，並不一定代表患有鼻咽癌，所以兩種方法都難以區分僅感染EB病毒的人和實際患有鼻咽癌的人。',
    image: (
      <StaticImage
        style={{
          height: '100%',
        }}
        src='../../assets/images/3_traditional_ebv_test.jpg'
        alt='traditional ebv test'
      ></StaticImage>
    ),
  },
]

const NGS = () => {
  const classes = useStyles()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('xs'))
  const [activeNote, setActiveNote] = useState(0)

  const handleChange = (e) =>
    e.target.dataset?.value && setActiveNote(Number(e.target.dataset?.value))
  return (
    <Box bgcolor='background.paper' className={classes.root}>
      <Container className={classes.sectionOne} maxWidth='md'>
        <Box textAlign='center' mb={6}>
          <Typography variant='h4' color='primary'>
            了解NGS技術
          </Typography>
        </Box>
        <Hidden smUp>
          <Box className={classes.banner}>
            <StaticImage
              src='../../assets/images/ngs_banner.jpg'
              alt='ngs banner'
            ></StaticImage>
          </Box>
        </Hidden>
        <Box className={classes.sectionOneWrapper}>
          <Container disableGutters maxWidth='sm'>
            <Box mb={2} pl={matches ? 2 : 0}>
              {matches && <TitleDot left={-2}></TitleDot>}
              <Typography variant='h4' color='primary'>
                甚麼是NGS?
              </Typography>
            </Box>
            <Box>
              <Hidden xsDown>
                <TitleDot left={-4.5}></TitleDot>
              </Hidden>
              NGS全名為 Next-generation Sequencing
              (中文即次世代測序技術)。NGS利用高通量和大規模平行測序，與過往第一代測序技術
              (即Sanger測序，每次只能針對一條DNA片段進行測序)
              相比，能讓結果維持在高準確性的同時，大幅提升整體測序的效率和降低所需成本，實在是一大突破。
              <br />
              <br />
              從整體處理效率而言，NGS測序通量較高
              (即能同時為數百到數千個基因或基因區域進行分析)，在提升測試速度的同時，大幅降低測序成本，以完成一個人類基因組的測序為例，所需時間從過往10年大幅縮短至只需1天時間，測序成本亦可從約30億美元大幅降至約1000美元。此外，NGS還可以透過「深度測序」，以更高靈敏度來檢測基因組目標區域的多個新型或罕見變異。因此，NGS能夠做到第一代測序技術無法提供的多重分析，例如進行大規模全基因組測序
              (Whole Genome Sequencing) 來分析完整的人類基因，或利用轉錄體定序
              (Transcriptome Sequencing) 進行 mRNA、miRNA 表現量分析、RNA
              splicing 研究等。
              <br />
              <br />
              有了NGS的超高通量、可擴展性和速度，在生物資訊學與基因數據相結合下，研究人員就能以前所未有的水準來開展生物系統研究，為疾病研究和群體基因組學研究提供有價值的資訊；在臨床應用方面，還能對癌症樣本進行測序，分析稀有體細胞變異及表觀遺傳學因素，以揭示疾病相關的等位基因。
            </Box>
          </Container>
        </Box>
      </Container>
      <Box className={classes.sectionTwoWrapper}>
        <Container disableGutters maxWidth='md'>
          <Hidden smUp>
            <Box onClick={handleChange}>
              {notes.map((note, index) => (
                <Box
                  pl={1.5}
                  key={index}
                  data-value={index}
                  className={classnames(
                    classes.noteTab,
                    index !== activeNote && classes.noteTabActive
                  )}
                >
                  <TitleDot
                    bgcolor={index !== activeNote && '#e8e8e8'}
                    left={-3}
                  ></TitleDot>
                  {note.title}
                  {activeNote !== index && '(閱讀全文）'}
                </Box>
              ))}
            </Box>
          </Hidden>
          {notes.map(
            (note, index) =>
              (!matches || index === activeNote) && (
                <Box key={index} className={classes.noteItem}>
                  <Grid container spacing={0}>
                    <Grid item xs={12} sm={3}>
                      <Box className={classes.noteImage}>{note.image}</Box>
                    </Grid>
                    <Grid item xs={12} sm={9}>
                      <Box className={classes.noteContent}>
                        <Box mb={1.25}>
                          <Typography variant='h4' color='primary'>
                            {note.title}
                          </Typography>
                        </Box>
                        <Box>
                          <Hidden xsDown>
                            <TitleDot left={-5}></TitleDot>
                          </Hidden>
                          {note.content}
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              )
          )}
        </Container>
      </Box>
    </Box>
  )
}

export default NGS

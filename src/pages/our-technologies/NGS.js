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

const notes = [
  {
    title: '我們如何應用 NGS技術，以進行早期鼻咽癌篩查？',
    content:
      'Take2 Prophecy™ 早期鼻咽癌篩查結合PCR及次世代DNA測序技術 (NGS: Next-generation Sequencing) 來檢測血漿中人類和EB病毒的DNA與鼻咽癌相關之特徵，並利用精密的演算法進行數據分析，讓醫生能識別出早期鼻咽癌患者，提高患者成功治癒的可能性及存活率³。',
  },
  {
    title: '以組織活檢檢測鼻咽癌的局限',
    content:
      '組織活檢為癌症臨床診斷的金標準，由受過專業訓練的醫生以鼻內視鏡抽取鼻腔組織，再進行細胞分析。這類方法具入侵性，不易用於所有身體部位；加上腫瘤細胞會隨著時間變化，而組織活檢只能代表檢測當下取得的腫瘤細胞的情況，故僅能提供有限的腫瘤資料；再者，組織活檢不能頻繁、重覆地使用以監測疾病的進展；有凝血障礙的人士在抽取組織的過程中也有較高的出血風險。因此，組織活檢存在不同方面的缺陷。',
  },
  {
    title: '傳統EB病毒檢測難以準確檢測出鼻咽癌',
    content:
      '除了透過鼻內視鏡進行組織活檢外，抽血驗EB病毒 (Epstein-Barr Virus) 也是常見的鼻咽癌檢測手段，因為鼻咽癌與EB病毒關係非常密切。兩種最常用的檢測方法包括血清學檢測和通過定量PCR測量血漿中的EB病毒DNA數值，然而EB病毒感染非常普遍，病毒或抗體的存在可能僅代表短暫感染，並不一定代表患有鼻咽癌，所以兩種方法都難以區分僅感染EB病毒的人和實際患有鼻咽癌的人。',
  },
]

const NGS = () => {
  const classes = useStyles()
  return (
    <Container className={classes.root} maxWidth='md'>
      <Box>
        <Box>了解NGS技術</Box>
        <Box>
          <Box>
            <TitleDot></TitleDot>
            NGS全名為 Next-generation Sequencing
            (中文即次世代測序技術)。NGS利用高通量和大規模平行測序，與過往第一代測序技術
            (即Sanger測序，每次只能針對一條DNA片段進行測序)
            相比，能讓結果維持在高準確性的同時，大幅提升整體測序的效率和降低所需成本，實在是一大突破。
            <br />
            從整體處理效率而言，NGS測序通量較高
            (即能同時為數百到數千個基因或基因區域進行分析)，在提升測試速度的同時，大幅降低測序成本，以完成一個人類基因組的測序為例，所需時間從過往10年大幅縮短至只需1天時間，測序成本亦可從約30億美元大幅降至約1000美元。此外，NGS還可以透過「深度測序」，以更高靈敏度來檢測基因組目標區域的多個新型或罕見變異。因此，NGS能夠做到第一代測序技術無法提供的多重分析，例如進行大規模全基因組測序
            (Whole Genome Sequencing) 來分析完整的人類基因，或利用轉錄體定序
            (Transcriptome Sequencing) 進行 mRNA、miRNA 表現量分析、RNA splicing
            研究等。
            <br />
            有了NGS的超高通量、可擴展性和速度，在生物資訊學與基因數據相結合下，研究人員就能以前所未有的水準來開展生物系統研究，為疾病研究和群體基因組學研究提供有價值的資訊；在臨床應用方面，還能對癌症樣本進行測序，分析稀有體細胞變異及表觀遺傳學因素，以揭示疾病相關的等位基因。
          </Box>
          <Box>
            {notes.map((note, index) => (
              <Box key={index}>
                <Box width={100}>
                  <StaticImage
                    src='../../assets/images/ngs_note.jpg'
                    alt='ngs note'
                  ></StaticImage>
                </Box>
                <Box>
                  <Box>{note.title}</Box>
                  <Box>
                    <TitleDot></TitleDot>
                    {note.content}
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

export default NGS

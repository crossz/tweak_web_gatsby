import React from 'react'
import { Formik, FieldArray } from 'formik'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import { throttle } from 'lodash-es'
import { oriSchema } from '@utils/schema'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'
import FormControlLabel from '@material-ui/core/FormControlLabel'

const initialValues = {
  gender: '0',
  quiz: [
    { name: 'quiz1', value: '0' },
    { name: 'quiz2', value: '0' },
    { name: 'quiz3', value: '0' },
    { name: 'quiz4', value: '0' },
    { name: 'quiz5', value: '0' },
    { name: 'quiz6', value: '0' },
  ],
}
const schema = oriSchema.pick(['gender'])

const Quiz = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={throttle(async (values) => {}, 1000)}
    >
      {(props) => {
        const {
          values,
          handleChange,
          handleSubmit,
          errors,
          touched,
          isSubmitting,
        } = props

        return (
          <form onSubmit={handleSubmit}>
            <FieldArray name='quiz'>
              {() =>
                values?.quiz?.length &&
                values.quiz.map((item, index) => (
                  <FormControl key={index}>
                    <FormLabel>gender</FormLabel>
                    <RadioGroup row name={`values.${index}.name`}>
                      <FormControlLabel
                        value='0'
                        control={<Radio color='primary' />}
                        label='a1'
                        labelPlacement='end'
                      />
                      <FormControlLabel
                        value='1'
                        control={<Radio color='primary' />}
                        label='a2'
                        labelPlacement='end'
                      />
                    </RadioGroup>
                    <FormHelperText>error</FormHelperText>
                  </FormControl>
                ))
              }
            </FieldArray>
            <Box mx={3}>
              <Button
                type='submit'
                variant='contained'
                color='primary'
                disabled={isSubmitting}
              >
                提交
              </Button>
            </Box>
          </form>
        )
      }}
    </Formik>
  )
}

export default Quiz

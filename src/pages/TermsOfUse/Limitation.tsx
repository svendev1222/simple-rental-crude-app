import { Box, Typography } from '@mui/material'

import { palette } from '../../themes'

export const Limitation = () => {
  return (
    <Box mt={4}>
      <Typography
        variant="h4"
        sx={{
          color: palette.common.black,
        }}
      >
        14. LIMITATION OF LIABILITY
      </Typography>
      <Typography
        variant="body1"
        mt={4}
        sx={{
          color: palette.common.black,
          fontSize: 16,
        }}
      >
        IN NO EVENT WILL THE INDEMNIFIED PARTIES BE LIABLE FOR ANY DIRECT,
        SPECIAL, INDIRECT, INCIDENTAL, EXEMPLARY, PUNITIVE OR CONSEQUENTIAL
        DAMAGES, OR ANY OTHER DAMAGES OF ANY KIND, INCLUDING BUT NOT LIMITED TO,
        LOSS OF USE, LOSS OF PROFITS, LOSS OF DATA, INJURY TO PERSON OR PROPERTY
        OR DEATH, WHETHER IN AN ACTION IN CONTRACT, TORT (INCLUDING BUT NOT
        LIMITED TO NEGLIGENCE), EQUITY OR OTHERWISE, ARISING OUT OF OR IN ANY
        WAY CONNECTED WITH THE USE OF OR INABILITY TO USE THE SITE, THE
        SERVICES, THE INTERACTIVE AREAS, OR THE SITE MATERIALS, INCLUDING
        WITHOUT LIMITATION ANY DAMAGES CAUSED BY OR RESULTING FROM YOUR RELIANCE
        ON ANY INFORMATION OBTAINED FROM NDU, OR THAT RESULT FROM MISTAKES,
        OMISSIONS, INTERRUPTIONS, DELETION OF FILES OR EMAIL, ERRORS, DEFECTS,
        VIRUSES, DELAYS IN OPERATION OR TRANSMISSION OR ANY FAILURE OF
        PERFORMANCE, WHETHER OR NOT RESULTING FROM ACTS OF GOD, COMMUNICATIONS
        OR INTERNET FAILURE, THEFT, DESTRUCTION OR UNAUTHORIZED ACCESS TO NDU’S
        RECORDS OR SERVICES.
      </Typography>
    </Box>
  )
}

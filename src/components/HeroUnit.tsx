'use client';

import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { ReactElement } from "react";

export default function Component({signedIn} : {signedIn : boolean}): ReactElement {
    return(
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Project Doula
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              { signedIn ?
              "Select a project or create a new one:" :
              "Fast and reliable work estimations for freelancers."
              }
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              {
                signedIn ? 
                "" :
              <>
                {/* <Button variant="outlined">Create an account</Button> */}
                
                <Button href="/sign-in" variant="outlined">Sign-in</Button>
              </>
            }
            </Stack>
          </Container>
        </Box>
    )
  }

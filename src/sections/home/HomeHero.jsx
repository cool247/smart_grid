import { m } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Button, Box, Link, Container, Typography, Stack } from '@mui/material';
// routes
import { PATH_AUTH } from '../../routes/paths';
// components
import Image from '../../components/Image';
import Iconify from '../../components/Iconify';
import TextIconLabel from '../../components/TextIconLabel';
import { MotionContainer, varFade } from '../../components/animate';
import overlay from '/overlay.webp';
import electric_grid from '/grid.webp';
import useResponsive from '../../hooks/useResponsive';
// ----------------------------------------------------------------------

const RootStyle = styled(m.div)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.grey[400],
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    display: 'flex',
    position: 'fixed',
    alignItems: 'center',
  },
}));

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(({ theme }) => ({
  zIndex: 10,
  maxWidth: 520,
  margin: 'auto',
  textAlign: 'center',
  position: 'relative',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    margin: 'unset',
    textAlign: 'left',
  },
}));

const HeroOverlayStyle = styled(m.img)({
  zIndex: 1,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
  filter: 'brightness(0.3)',
});

const HeroImgStyle = styled(m.img)(({ theme }) => ({
  top: 0,
  right: 0,
  bottom: 0,
  zIndex: 8,
  width: '100%',
  margin: 'auto',
  position: 'absolute',
  [theme.breakpoints.up('md')]: {
    right: '8%',
    width: 'auto',
    height: '48vh',
  },
}));

// ----------------------------------------------------------------------

export default function HomeHero() {
  const isDesktop = useResponsive('up' , 'md')


  return (
    <MotionContainer>
      <RootStyle>
        <HeroOverlayStyle alt="overlay" src={overlay} variants={varFade().in} />

        {isDesktop && <HeroImgStyle alt="hero" src={electric_grid} variants={varFade().inUp} />}

        <Container>
          <ContentStyle>
            <m.div variants={varFade().inRight}>
              <Typography variant="h1" sx={{ color: 'common.white' }}>
                Energize Your<br />
                Future with<br />
                <Typography component="span" variant="h1" sx={{ color: 'primary.main' }}>
                  Smart Grid.
                </Typography>
              </Typography>
            </m.div>

            <m.div variants={varFade().inRight}>
              <Typography sx={{ color: 'common.white' }}>
              Energy Landscape: Harnessing Data, Technology, and Sustainability with Our Smart Grid Solution.
              </Typography>
            </m.div>

            {/* <Stack spacing={2.5} alignItems="center" direction={{ xs: 'column', md: 'row' }}>
              <m.div variants={varFade().inRight}>
                <TextIconLabel
                  icon={<Image alt="sketch icon" src="" sx={{ width: 20, height: 20, mr: 1 }} />}
                  value={
                    <Link href="" target="_blank" rel="noopener" color="common.white" sx={{ typography: 'body2' }}>
                      Preview Sketch
                    </Link>
                  }
                />
              </m.div>

              <m.div variants={varFade().inRight}>
                <TextIconLabel
                  icon={<Image alt="sketch icon" src="" sx={{ width: 20, height: 20, mr: 1 }} />}
                  value={
                    <Link href="" target="_blank" rel="noopener" color="common.white" sx={{ typography: 'body2' }}>
                      Preview Figma
                    </Link>
                  }
                />
              </m.div>
            </Stack> */}

            <m.div variants={varFade().inRight}>
              <Button
                size="large"
                variant="contained"
                component={RouterLink}
                to={PATH_AUTH.login}
                startIcon={<Iconify icon={'eva:flash-fill'} width={20} height={20} />}
              >
                Login
              </Button>
            </m.div>

            {/* <Stack spacing={2.5}>
              <m.div variants={varFade().inRight}>
                <Typography variant="overline" sx={{ color: 'primary.light' }}>
                  Available For
                </Typography>
              </m.div>

              <Stack direction="row" spacing={1.5} justifyContent={{ xs: 'center', md: 'flex-start' }}>
                {['ic_sketch', 'ic_figma', 'ic_js', 'ic_ts', 'ic_nextjs'].map((resource) => (
                  <m.img key={resource} variants={varFade().inRight} src={``} />
                ))}
              </Stack>
            </Stack> */}
          </ContentStyle>
        </Container>
      </RootStyle>
      <Box sx={{ height: { md: '100vh' } }} />
    </MotionContainer>
  );
}

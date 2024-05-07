
import { Box, Grid } from '@mui/material';
import picture1 from '../images/minified/Color-ID-1.png';
import picture2 from '../images/minified/Color-ID-2.png';
import picture3 from '../images/minified/Color-ID-3.png';
import picture4 from '../images/minified/Color-ID-4.png';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const ColorID = () => {
    return (
        <section id='about' className='pb-4'>
            <div className='heading'>Color ID</div>
            <Grid container sx={{display: 'flex', width: '100%', flexDirection: {sm: 'column', md: 'row'}}}>
                {/* <Box sx={{marginRight: '1%', marginLeft: '1%', display: 'flex', justifyContent: 'center', flexDirection: {sm: 'column', md: 'row'}}}> */}
                    <Grid item xs={12} sm={12} md={3} alignSelf={'center'} mb={2}>
                        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><img src={picture1} alt='color id screenshot' width={'80%'}/></Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3} alignSelf={'center'} mb={2}>
                        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><img src={picture2} alt='color id screenshot' width={'80%'} /></Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3} alignSelf={'center'} mb={2}>
                        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><img src={picture3} alt='color id screenshot' width={'80%'}/></Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3} alignSelf={'center'} mb={2}>
                        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><img src={picture4} alt='color id screenshot' width={'80%'}/></Box>
                    </Grid>
                {/* </Box> */}

            </Grid>
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <a href="https://apps.apple.com/us/app/color-id-identify-colors/id6498862987">
                    <Button className='btn btn-secondary btn-lg p-2 mt-4 px-5 py-3'>
                            Download Now!
                        </Button>
                </a>
            </Box>
            <Box p={6}>
                <p className='about-content fs-3'>Introducing Color ID, your ultimate color identification companion. Whether you are color deficient, an artist seeking inspiration, a designer crafting a masterpiece, or simply curious about the hues around you, Color ID is here to elevate your color exploration experience.</p>
                <p className=' fs-3'>With its seamless integration with your smartphone's camera, Color ID allows you to instantly capture the colors that catch your eye in the world around you. Simply point your camera at any object, and let Color ID do the rest. The app swiftly identifies the exact color, providing detailed information including RGB, Hex, HSL, and CMYK values.
                </p>
                <p className='fs-3'>But the color journey doesn't stop there. Color ID also empowers you to delve into your photo library, allowing you to extract colors from your past snapshots and unleash your creativity in new ways. Whether it's a breathtaking landscape, a vibrant cityscape, or a cherished memory, Color ID transforms your photos into a palette of possibilities.</p>
                <p className='fs-3'>With a comprehensive database boasting over 1600 colors, including classics, neutrals, and trendy tones, Color ID ensures that you'll find the perfect shade for every project and passion. From fiery reds to tranquil blues, from earthy browns to ethereal pastels, the spectrum is at your fingertips.</p>
                <p className='fs-3'>Whether you're a professional designer, a budding artist, or an enthusiast exploring the world of color, Color ID is your indispensable tool for unlocking the full spectrum of creative potential.</p>
                <p className='fs-3'>Download Color ID now and embark on a journey of color discovery like never before.</p>
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <LinkContainer exact={true} to='/contact'>
            <Button className='btn btn-secondary btn-lg p-2 mt-4 px-5 py-3'>
                            Contact
                        </Button>
                        </LinkContainer>
                        </Box>
        </section>
    );
};

export default ColorID;

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

// Boostrap styles
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const navbar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">
          <svg width="170.04000396728517" height="34.97434664880073" viewBox="0 0 369.9130434782609 76.08484304088051" class="css-1j8o68f"><defs id="SvgjsDefs1548"></defs><g id="SvgjsG1549" featurekey="v37d4h-0" transform="matrix(1.0573212332152053,0,0,1.0573212332152053,-14.822586424911009,-14.823644173680428)" fill="#15b7b9"><g xmlns="http://www.w3.org/2000/svg" display="none"><path display="inline" d="M79.762,50.001c0-3.41,2.764-6.172,6.174-6.172V29.718H14.064v14.111c3.414,0,6.175,2.762,6.175,6.172   c0,3.414-2.761,6.178-6.175,6.178v14.104h71.872V56.179C82.525,56.179,79.762,53.415,79.762,50.001z"></path></g><g xmlns="http://www.w3.org/2000/svg" display="none"><path display="inline" d="M84.649,28.072L69.086,43.635L56.364,30.916l15.562-15.565c-7.393-2.627-15.958-1.005-21.872,4.914   c-5.917,5.914-7.541,14.48-4.916,21.873L14.135,73.142l12.722,12.725l31.006-31.007c7.392,2.626,15.957,1.004,21.872-4.913   C85.652,44.03,87.274,35.467,84.649,28.072z"></path></g><g xmlns="http://www.w3.org/2000/svg" display="none"><path display="inline" d="M71.885,38.652V14.066H28.107v24.586h0.016l-2.274,16.811h0.012v22.156h1.979v8.314h7.386v-8.314h29.551   v8.314h7.387v-8.314h1.982V55.463h0.008L71.885,38.652z M35.083,71.154c-2.547,0-4.612-2.059-4.612-4.615   c0-2.549,2.065-4.615,4.612-4.615c2.549,0,4.62,2.066,4.62,4.615C39.703,69.096,37.631,71.154,35.083,71.154z M64.922,71.154   c-2.553,0-4.613-2.059-4.613-4.615c0-2.549,2.061-4.615,4.613-4.615c2.547,0,4.617,2.066,4.617,4.615   C69.539,69.096,67.469,71.154,64.922,71.154z M30.47,54.461l3.009-15.809h1.47h30.278h1.299l3.014,15.809H30.47z"></path></g><g xmlns="http://www.w3.org/2000/svg" display="none"><path display="inline" d="M86,18.67l-7.942,8.311l0.177,0.014C71.611,19.072,61.723,14.02,50.561,14.02   c-19.973,0-36.109,16.107-36.109,35.984c0,19.871,16.215,35.977,36.184,35.977c15.459,0,28.668-9.658,33.825-23.25l-13.269-5.516   c-2.992,8.42-11.073,14.465-20.538,14.465c-12.02,0-21.779-9.725-21.779-21.676c0-11.961,9.767-21.691,21.785-21.691   c7.195,0,13.566,3.5,17.541,8.867l-8.686,8.088L86,45.256V18.67z"></path></g><g xmlns="http://www.w3.org/2000/svg"><polygon points="14.019,14.02 85.981,50.004 14.019,85.98  "></polygon></g></g><g id="SvgjsG1550" featurekey="UxBHKT-0" transform="matrix(2.811671613904592,0,0,2.811671613904592,94.20052987214497,3.010077465531065)" fill="#15b7b9"><path d="M4.88 20 l-3 0 l0 -8.26 l-1.24 0 l0 -2.56 l1.24 0 q0.08 -2.14 1.22 -3.26 t3.16 -1.12 q0.6 0 1.32 0.18 l-0.16 2.42 q-0.38 -0.12 -0.82 -0.12 q-1.08 0 -1.4 0.54 t-0.32 1.36 l1.98 0 l0 2.56 l-1.98 0 l0 8.26 z M11.98 7.369999999999999 q-0.48 0.47 -1.16 0.47 q-0.7 0 -1.19 -0.47 t-0.49 -1.15 q0 -0.66 0.49 -1.13 t1.19 -0.47 q0.68 0 1.16 0.47 t0.48 1.13 q0 0.68 -0.48 1.15 z M9.32 9.02 l3 0 l0 10.98 l-3 0 l0 -10.98 z M15.3 4.880000000000001 l3 0 l0 15.12 l-3 0 l0 -15.12 z M37.57 10.04 q1.13 1.24 1.13 3.46 l0 6.5 l-3.02 0 l0 -6.5 q0 -1.18 -0.59 -1.7 t-1.55 -0.52 q-0.8 0 -1.44 0.6 t-0.66 2 l0 6.12 l-3.02 0 l0 -6.5 q0 -1.18 -0.59 -1.7 t-1.53 -0.52 q-0.86 0 -1.49 0.64 t-0.63 2.26 l-0.02 5.82 l-2.98 0 l0 -11 l2.98 0 l0 1 q0.58 -0.52 1.4 -0.86 t1.5 -0.34 q2.32 0 3.54 1.5 q0.62 -0.7 1.54 -1.1 t2 -0.4 q2.3 0 3.43 1.24 z M40.4 9.04 l3.32 0 l2.56 5.38 l2.56 -5.38 l3.34 0 l-5.9 11.44 z M56.129999999999995 19.74 q-1.37 -0.54 -2.35 -1.83 t-0.98 -3.37 t0.99 -3.36 t2.37 -1.82 t2.62 -0.54 q1.44 0 2.74 0.64 t2.13 1.88 t0.87 2.94 q0 0.52 -0.02 0.9 t-0.04 0.48 l-8.68 0 q0.24 1.16 1.2 1.58 t1.8 0.42 q1.08 0 1.72 -0.39 t1.1 -0.89 l2.32 1.34 q-1.88 2.56 -5.14 2.56 q-1.28 0 -2.65 -0.54 z M56.739999999999995 12.05 q-0.78 0.61 -0.88 1.49 l5.5 0 q-0.06 -0.52 -0.4 -1 t-0.91 -0.79 t-1.29 -0.31 q-1.24 0 -2.02 0.61 z M72.18 11.87 q-0.86 0.21 -1.58 0.99 t-0.72 2.28 l0 4.86 l-2.98 0 l0 -11 l2.98 0 l0 1.46 q0.74 -0.98 1.81 -1.33 t1.95 -0.33 l0 2.92 q-0.6 -0.06 -1.46 0.15 z M74.80000000000001 18.54 l1.56 -2.08 q0.72 0.5 1.68 0.84 t1.88 0.34 q0.68 0 1.13 -0.28 t0.45 -0.7 t-0.51 -0.59 t-0.99 -0.24 t-0.62 -0.09 q-1.2 -0.2 -2.07 -0.48 t-1.58 -1 t-0.71 -1.98 q0 -2.08 1.51 -2.78 t3.03 -0.7 q1.3 0 2.4 0.38 t2.18 1.2 l-1.56 2.04 q-0.78 -0.46 -1.54 -0.74 t-1.58 -0.28 q-0.5 0 -0.97 0.22 t-0.47 0.6 q0 0.48 0.65 0.68 t1.43 0.3 q1.4 0.24 2.24 0.5 t1.49 0.97 t0.65 2.01 q0 1.72 -1.18 2.65 t-3.34 0.93 q-3 0 -5.16 -1.72 z M89.67 19.74 q-1.37 -0.54 -2.35 -1.83 t-0.98 -3.37 t0.99 -3.36 t2.37 -1.82 t2.62 -0.54 q1.44 0 2.74 0.64 t2.13 1.88 t0.87 2.94 q0 0.52 -0.02 0.9 t-0.04 0.48 l-8.68 0 q0.24 1.16 1.2 1.58 t1.8 0.42 q1.08 0 1.72 -0.39 t1.1 -0.89 l2.32 1.34 q-1.88 2.56 -5.14 2.56 q-1.28 0 -2.65 -0.54 z M90.28 12.05 q-0.78 0.61 -0.88 1.49 l5.5 0 q-0.06 -0.52 -0.4 -1 t-0.91 -0.79 t-1.29 -0.31 q-1.24 0 -2.02 0.61 z"></path></g></svg>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavDropdown title="user" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Favorites</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Latest Reviews</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Sign out
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="primary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default navbar
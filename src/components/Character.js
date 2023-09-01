import { Card, Container, Row, Col, Image} from 'react-bootstrap';
import NahidaImage from "../assets/characters/Nahida.webp"
import LumineImage from "../assets/characters/Lumine.webp"

import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { BsBook } from "react-icons/bs";

function Characters () {
    return (
        <div>
        <Container>
            <br />
            <h1 className='text-white' id="Character">5⭐CHARACTER</h1>
            <Row>

            <Col md={6} className='charWrapper'>
                    <Card className="bg-dark text-white charImage">
                        <Image src={NahidaImage} alt="banner" className='Image'/>
                        <div className="bg-dark">
                            <div className='p-2 m-1 text-white descriptionText'>
                                <Card.Title className='text-center'>Nahida</Card.Title>
                                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">                                
                                Nahida is a playable Dendro character in Genshin Impact
                                She is the vessel of Lesser Lord Kusanali, the current Dendro Archon.</Tooltip>}>
                                <span className="button">
                                    <Button variant="dark" disabled style={{ pointerEvents: 'none' }}>
                                    <BsBook />
                                    </Button>
                                </span>
                                </OverlayTrigger>
                                <Card.Text className="text-center">
                                    Gnosis: Dendro
                                </Card.Text>
                            </div>    
                        </div>
                    </Card>
                </Col>

                <Col md={6} className='charWrapper'>
                    <Card className="bg-dark text-white charImage">
                        <Image src={LumineImage} alt="banner" className='Image'/>
                        <div className="bg-dark">
                            <div className='p-2 m-1 text-white descriptionText'>
                                <Card.Title className='text-center'>Lumine</Card.Title>
                                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">                                
                                Ganyu (Chinese: 甘雨 Gānyǔ) is a playable Cryo character in Genshin Impact.
                                She is a half-qilin Adeptus under contract with the Geo Archon Morax and serves as 
                                the general secretary of the Liyue Qixing.</Tooltip>}>
                                <span className="button">
                                    <Button variant="dark" disabled style={{ pointerEvents: 'none' }}>
                                    <BsBook />
                                    </Button>
                                </span>
                                </OverlayTrigger>
                                <Card.Text className="text-center">
                                    Vision: Anemo/ Geo/ Electro/ Dendro
                                </Card.Text>
                            </div>    
                        </div>
                    </Card>
                </Col>

            </Row>
        </Container>
    </div>  
    )
}

export default Characters
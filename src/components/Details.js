import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { BsArrowReturnLeft } from "react-icons/bs";

// weapon
import amenomaKageuchi from '../assets/weapons/Amenoma_Kageuchi.webp'
import theWidsith from '../assets/weapons/the_Widsith.webp'

// gladiator's_Finale
import gfFlower from '../assets/artifacts/gladiators_Finale/gladiators_finale_flower.webp'
import gfPlume from '../assets/artifacts/gladiators_Finale/gladiators_finale_plume.webp'
import gfSands from '../assets/artifacts/gladiators_Finale/gladiators_finale_sands.png'
import gfGoblet from '../assets/artifacts/gladiators_Finale/gladiators_finale_goblet.png'
import gfCirclet from '../assets/artifacts/gladiators_Finale/gladiators_finale_circlet.png'

// deepwood_Memories
import dmFlower from '../assets/artifacts/deepwood_Memories/deepwood_memories_flower.webp'
import dmPlume from '../assets/artifacts/deepwood_Memories/deepwood_memories_plume.webp'
import dmSands from '../assets/artifacts/deepwood_Memories/deepwood_memories_sands.webp'
import dmGoblet from '../assets/artifacts/deepwood_Memories/deepwood_memories_goblet.webp'
import dmCirclet from '../assets/artifacts/deepwood_Memories/deepwood_memories_circlet.webp'


function Details() {
  return (
    <div>
    <Container >
      <br />
      <h1 className='text-white' id="details">DETAILS<a className="returnButton" href="#Character"><BsArrowReturnLeft /></a></h1>

      <h4 className="text-white">Nahida</h4>
    <CardGroup>
      <Card className='bg-dark'>
        <Card.Img src={dmFlower}/>
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={dmPlume} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={dmSands} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={dmGoblet} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={dmCirclet} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={theWidsith} />
      </Card>
    </CardGroup>
    </Container>

    <Container >
      <br />
      <h4 className="text-white">Lumine</h4>
    <CardGroup>
      <Card className='bg-dark'>
        <Card.Img src={gfFlower} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={gfPlume} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={gfSands} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={gfGoblet} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={gfCirclet} />
      </Card>

      <Card className='bg-dark'>
        <Card.Img src={amenomaKageuchi} />
      </Card>
    </CardGroup>
    </Container>
    </div>
  );
}

export default Details;
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

function Jadwal() {
  return (
    <Container>
    <div className='text-center font-bold mb-4' style={{fontSize:'25px'}}>Jadwal Olahraga</div>
    <div className="table-responsive-lg">
      <Table striped bordered hover>
        <thead style={{ backgroundColor: 'red', color: 'white' }}>
          <tr>
            <th>No</th>
            <th>Cabang</th>
            <th>Tempat Latihan</th>
            <th>Waktu</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d,index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{d.nama}</td>
              <td>{d.tempat}</td>
              <td>{d.waktu}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  </Container>
  );
}

const data=[
    {
        nama:'Basket',
        tempat:'Lapangan ',
        waktu:' WIB'
    },
    {
        nama:'Sepakbola',
        tempat:'Lapangan ',
        waktu:' WIB'
    },
    {
        nama:'Futsal',
        tempat:'Lapangan ',
        waktu:' WIB'
    },
    {
        nama:'Panahan',
        tempat:'Lapangan ',
        waktu:' WIB'
    },
    {
        nama:'Tenis Lapangan',
        tempat:'Lapangan ',
        waktu:' WIB'
    },
    {
        nama:'Badminton',
        tempat:'Lapangan ',
        waktu:' WIB'
    },
    {
        nama:'Aerobik',
        tempat:'Lapangan ',
        waktu:' WIB'
    },
    {
        nama:'Lari',
        tempat:'Lapangan ',
        waktu:' WIB'
    },
    {
        nama:'Voli',
        tempat:'Lapangan ',
        waktu:' WIB'
    },
    {
        nama:'Beladiri',
        tempat:'Lapangan ',
        waktu:' WIB'
    },
    {
        nama:'Catur',
        tempat:'Lapangan ',
        waktu:' WIB'
    },
    {
        nama:'Tenis Meja',
        tempat:'Lapangan ',
        waktu:' WIB'
    },
    {
        nama:'Gym',
        tempat:'Lapangan ',
        waktu:' WIB'
    },
    {
        nama:'Yoga',
        tempat:'Lapangan ',
        waktu:' WIB'
    },
]

export default Jadwal;

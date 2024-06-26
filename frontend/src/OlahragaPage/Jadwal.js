import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";

function Jadwal() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/olahraga")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <Container>
      <div className="text-center font-bold mb-4" style={{ fontSize: "25px" }}>
        Jadwal Olahraga
      </div>
      <div className="table-responsive-lg">
        <Table striped bordered hover>
          <thead style={{ backgroundColor: "red", color: "white" }}>
            <tr>
              <th>No</th>
              <th>Cabang</th>
              <th>Tempat Latihan</th>
              <th>Hari</th>
              <th>Jam</th>
              <th>PIC</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((d, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{d.nama_olahraga}</td>
                  <td>{d.tempat}</td>
                  <td>{d.hari}</td>
                  <td>{d.jam}</td>
                  <td>{d.pic}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </Container>
  );
}

export default Jadwal;

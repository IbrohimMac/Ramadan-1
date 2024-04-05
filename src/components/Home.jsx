import { useState, useEffect } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
const Home = () => {
  const [ramadan, setRamadan] = useState([]);
  useEffect(() => {
    const fetchRamadan = async () => {
      try {
        const res = await fetch("http://localhost:3000/dates");
        const Data = await res.json();
        setRamadan(Data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchRamadan();
  }, []);
  return (
    <div>
      <h1 className="text-center m-5">Ramadan Taqvim-2024</h1>
      {ramadan.length > 0 && (
        <div className="container">
          <Table striped className="table-hover">
            <thead>
              <tr>
                <th className="text-center">Kun</th>
                <th className="text-center">Hafta kuni</th>
                <th className="text-center">Sana</th>
                <th className="text-center">Sahar</th>
                <th className="text-center">Iftor</th>
              </tr>
            </thead>
            {ramadan.map((ramadan) => (
              <>
                <tbody>
                  <tr>
                    {/* <div className=""> */}
                    <td className="text-center">{ramadan.day}</td>
                    <td className="text-center">{ramadan.week}</td>
                    <td className="text-center">{ramadan.sana}</td>
                    <td className="text-center">{ramadan.sehar}</td>
                    <td className="text-center">{ramadan.iftar}</td>
                    {/* </div> */}
                  </tr>
                </tbody>
              </>
            ))}
          </Table>
        </div>
      )}
    </div>
  );
};

export default Home;

import React, { useState, useEffect } from "react";

import Navbar from "../../../components/admin/Navbar";
import BreadcrumbBox from "../../../components/admin/BreadcrumbBox";
import Alert from "../../../components/Alert";

import { Body } from "../styles";
import { NewTable, Icon } from "./styles";
// import { Container } from './styles';

const noticias: React.FC = () => {
  const [status, setStatus] = useState({});

  const [noticiaId, setNoticiaId] = useState(0);
  const [noticias, setNoticias] = useState({});
  const [alertActive, setAlertActive] = useState(false);
  const [alertOptions, setAlertOptions] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const breadcrumbMap = [
    { name: "Home", url: "/admin/" },
    { name: "Notícias", url: "/admin/noticias/" },
  ];

  const getData = async () => {
    let response = await fetch(
      "https://morning-meadow-26583.herokuapp.com/noticias/all"
    );
    setNoticias(await response.json());
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = async id => {
    let response = await fetch(
      `https://morning-meadow-26583.herokuapp.com/noticias/${id}`,
      {
        method: "DELETE",
      }
    );
    let data = await response.json();

    if ((await data.errorcode) == "none") {
      setAlertMessage("Notícia deletada com êxito :D");
      setNoticias(await data);
      setAlertOptions(false);
      setAlertActive(true);
    } else {
      setAlertMessage("Erro ao deletar notícia :(");
      setAlertOptions(false);
      setAlertActive(true);
    }
  };

  return (
    <>
      <Navbar />
      <Alert
        id={noticiaId}
        message={alertMessage}
        active={alertActive}
        handleCallback={id => {
          handleDelete(id);
          setAlertActive(false);
        }}
        handleClose={() => setAlertActive(false)}
        options={alertOptions}
      />
      <Body>
        <BreadcrumbBox map={breadcrumbMap} register />
        <NewTable striped bordered hover>
          <thead>
            <tr>
              <th> ID </th>
              <th> Título </th>
              <th> Descrição Minimizada </th>
              <th> Data </th>
              <th> Ações </th>
            </tr>
          </thead>
          <tbody>
            {/* @ts-ignore */}
            {noticias.errorcode == "none" /* @ts-ignore */
              ? noticias.noticias.map((item, index) => {
                  let date = item.createdAt.split("T");
                  let dateArray = date[0].split("-");
                  let hours = date[1].split(".");

                  let finalDate = `${dateArray[2]}/${dateArray[1]}/${dateArray[0]}\n${hours[0]}`;
                  return (
                    <tr className="heightLimit" key={index}>
                      <td>{item._id}</td>
                      <td>{item.title}</td>
                      <td>{item.descriptionMinimized}</td>
                      <td>{finalDate}</td>
                      <td className="actions">
                        <Icon
                          src="tdkcorretora_delete-icon.svg"
                          alt="TDK Corretora Delete Icon"
                          onClick={() => {
                            setAlertOptions(true);
                            setNoticiaId(item._id);
                            setAlertMessage(
                              "Tem certeza que deseja deletar essa notícia?"
                            );
                            setAlertActive(true);
                          }}
                        />
                        <Icon
                          src="tdkcorretora_edit-icon.svg"
                          alt="TDK Corretora Edit Icon"
                          onClick={() => handleDelete(item._id)}
                        />
                      </td>
                    </tr>
                  );
                })
              : null}
          </tbody>
        </NewTable>
      </Body>
    </>
  );
};

export default noticias;

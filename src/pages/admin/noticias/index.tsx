import React, { useState, useEffect } from "react";

import Navbar from "../../../components/admin/Navbar";
import BreadcrumbBox from "../../../components/admin/BreadcrumbBox";

import { Body } from "../styles";
import { NewTable, Icon } from "./styles";
// import { Container } from './styles';

const noticias: React.FC = () => {
  const [noticias, setNoticias] = useState({});

  const breadcrumbMap = [
    { name: "Home", url: "/admin/" },
    { name: "Notícias", url: "/admin/noticias/" },
  ];

  const getData = async () => {
    let response = await fetch("http://localhost:3001/noticias");
    setNoticias(await response.json());
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = async id => {
    let response = await fetch(`http://localhost:3001/noticias/`, {
      method: "DELETE",
    });
    let data = await response.json();
  };

  return (
    <>
      <Navbar />
      <Body>
        <BreadcrumbBox map={breadcrumbMap} register />
        <NewTable striped bordered hover>
          <thead>
            <tr>
              <th> ID </th>
              <th> Título </th>
              <th> Descrição </th>
              <th> Descrição Minimizada </th>
              <th> Data </th>
              <th> Ações </th>
            </tr>
          </thead>
          <tbody>
            {/* @ts-ignore */}
            {noticias.errorcode == "none" /* @ts-ignore */
              ? noticias.noticias.map(item => {
                  let date = item.createdAt.split("T");
                  let dateArray = date[0].split("-");
                  let hours = date[1].split(".");

                  let finalDate = `${dateArray[2]}/${dateArray[1]}/${dateArray[0]}\n${hours[0]}`;
                  return (
                    <tr>
                      <td>{item._id}</td>
                      <td>{item.title}</td>
                      <td className="overflow">{item.description}</td>
                      <td>{item.descriptionMinimized}</td>
                      <td>{finalDate}</td>
                      <td className="actions">
                        <Icon
                          src="tdkcorretora_delete-icon.svg"
                          alt="TDK Corretora Delete Icon"
                          onClick={() => handleDelete(item._id).then(getData())}
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

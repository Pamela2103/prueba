import React, { useEffect, useState } from "react";

interface Info {
  name: string;
  description: string;
  html_url: string;
  private: boolean;
}

const RepositoriesList = () => {
  const [info, setInfo] = useState<Info[]>([]);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch(
        "https://api.github.com/users/Pamela2103/repos"
      );
      const data = await response.json();
      setInfo(data.filter((inf: Info) => !inf.private));
    };

    fetchApi();
  }, []);

  return (
    <div className="repositories-list">
      {info.length > 0 ? (
        info.map((inf, index) => (
          <div className="repository-item" key={inf.name}>
            <div className="card ">
              <div className="card-body ">
                <h5 className="card-title">{inf.name}</h5>
                <p className="card-text ">{inf.description}</p>
                <a href={inf.html_url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  Mostrar Repositorio
                </a>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="loading-message">
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
};

export default RepositoriesList;

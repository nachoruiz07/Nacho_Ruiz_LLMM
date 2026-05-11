-- Script de preparación para la Semana 4
-- Ejecutar en SQL Server Management Studio o Azure Data Studio

CREATE DATABASE BibliotecaXML;
GO

USE BibliotecaXML;
GO

CREATE TABLE DocumentosXML (
    ID INT IDENTITY(1,1) PRIMARY KEY,
    Descripcion VARCHAR(100),
    ContenidoXML XML
);
GO

INSERT INTO DocumentosXML (Descripcion, ContenidoXML)
VALUES (
    'Catálogo de Ficción',
    '<biblioteca>
        <seccion nombre="Ficcion">
            <libro id="L01" idioma="es">
                <titulo>El Imperio Final</titulo>
                <autor>Brandon Sanderson</autor>
            </libro>
        </seccion>
    </biblioteca>'
);

INSERT INTO DocumentosXML (Descripcion, ContenidoXML)
VALUES (
    'Catálogo Técnico',
    '<biblioteca>
        <seccion nombre="Tecnica">
            <libro id="L02" idioma="es">
                <titulo>Java para Novatos</titulo>
                <autor>Juan Perez</autor>
            </libro>
            <libro id="L03" idioma="es">
                <titulo>SQL Server Avanzado</titulo>
                <autor>Maria Gomez</autor>
            </libro>
        </seccion>
    </biblioteca>'
);
GO

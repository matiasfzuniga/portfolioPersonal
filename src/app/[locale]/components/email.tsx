import {
    Body,
    Container,
    Column,
    Head,
    Html,
    Img,
    Preview,
    Row,
    Section,
    Text,
  } from "@react-email/components";
  
  interface TemplateEmailProps {
    username?: string;
    mail:string,
    text:string,
    updatedDate?: Date;
  }
  
  export const TemplateEmail = ({
    username,
    mail,
    text,
    updatedDate,
  }: TemplateEmailProps) => {
    const formattedDate = new Intl.DateTimeFormat("es", {
      dateStyle: "medium",
      timeStyle: "medium",
    }).format(updatedDate);
  
    return (
      <Html>
        <Head />
        <Preview>Nueva consulta de la web</Preview>
        <Body style={main}>
          <Container style={container}>
            <Section style={sectionsBorders}>
              <Row>
                <Column style={sectionBorder} />
                <Column style={sectionCenter} />
                <Column style={sectionBorder} />
              </Row>
            </Section>
            <Section style={content}>
              <Text style={paragraph}>
                Tenés una nueva consulta del día{" "}
                {formattedDate}.
                <br />
              </Text>
              <Text style={paragraph}>Hola Mati <br/> el usuario <strong>{username}</strong> con dirección <strong>{mail}</strong> dice: <strong>{text}</strong></Text>
            </Section>
          </Container>
  
          <Section style={footer}>
            <Row>
              <Column align="right" style={{ width: "50%", paddingRight: "8px" }}>
              </Column>
              <Column align="left" style={{ width: "50%", paddingLeft: "8px" }}>
              </Column>
            </Row>
            <Row>
              <Text style={{ textAlign: "center", color: "#706a7b" }}>
                © 2024 MZ, Todos los derechos reservados <br />
                Mendoza - Argentina
              </Text>
            </Row>
          </Section>
        </Body>
      </Html>
    );
  };

  
  const fontFamily = "HelveticaNeue,Helvetica,Arial,sans-serif";
  
  const main = {
    backgroundColor: "#efeef1",
    fontFamily,
  };
  
  const paragraph = {
    lineHeight: 1.5,
    fontSize: 14,
  };
  
  const container = {
    maxWidth: "580px",
    margin: "30px auto",
    backgroundColor: "#ffffff",
  };
  
  const footer = {
    maxWidth: "580px",
    margin: "0 auto",
  };
  
  const content = {
    padding: "5px 20px 10px 20px",
  };
  
  const logo = {
    display: "flex",
    justifyContent: "center",
    alingItems: "center",
    padding: 30,
  };
  
  const sectionsBorders = {
    width: "100%",
    display: "flex",
  };
  
  const sectionBorder = {
    borderBottom: "1px solid rgb(238,238,238)",
    width: "249px",
  };
  
  const sectionCenter = {
    borderBottom: "1px solid rgb(0,0,0,0.2)",
    width: "102px",
  };
  
  const link = {
    textDecoration: "underline",
  };
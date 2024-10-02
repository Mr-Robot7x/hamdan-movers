import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  phoneNo: string;
  emailAddress: string;
  address: string;
  services: string;
  otherServices?: string;
  message: string;
}
import imagesrc from "../../public/images/KSM-LOGO.png";
export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <Html>
    <Head />
    <Preview>New Order</Preview>
    <Body style={main}>
      <Container>
        <Section style={logo}>
          <Img src={`${imagesrc}`} />
        </Section>

        <Section style={content}>
          <Row>
            <Img
              style={image}
              width={620}
              src={`${""}/static/yelp-header.png`}
            />
          </Row>

          <Row style={{ ...boxInfos, paddingBottom: "0" }}>
            <Column>
              <Heading
                style={{
                  fontSize: 32,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Hi Nazir Ullah,
              </Heading>
              <Heading
                as="h2"
                style={{
                  fontSize: 26,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                You have new order from Al Khajista.com
              </Heading>
              <Heading
                style={{
                  fontSize: 25,
                  marginTop: "10px",
                  marginBottom: "10px",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Order Information
              </Heading>
              <Text style={paragraph}>
                <b>User Name </b>
                {firstName}
              </Text>
              <Text style={{ ...paragraph, marginTop: -5 }}>
                <b>Email Address </b>
                {}
              </Text>
              <Text style={{ ...paragraph, marginTop: -5 }}>
                <b>Location: </b>
                {"loginLocation"}
              </Text>
              <Text
                style={{
                  color: "rgb(0,0,0, 0.5)",
                  fontSize: 14,
                  marginTop: -5,
                }}
              >
                *Approximate geographic location based on IP address:
                {"3333"}
              </Text>

              <Text style={paragraph}>
                If this was you, nothing else you need to do.
              </Text>
              <Text style={{ ...paragraph, marginTop: -5 }}>
                If this you or if you have additional questions, please see our
                support page.
              </Text>
            </Column>
          </Row>
          <Row style={{ ...boxInfos, paddingTop: "0" }}>
            <Column style={containerButton} colSpan={2}>
              <Button style={button}>Learn More</Button>
            </Column>
          </Row>
        </Section>

        <Text
          style={{
            textAlign: "center",
            fontSize: 12,
            color: "rgb(0,0,0, 0.7)",
          }}
        >
          © 2022 | Yelp Inc., 350 Mission Street, San Francisco, CA 94105,
          U.S.A. | www.yelp.com
        </Text>
      </Container>
    </Body>
  </Html>
);

import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";

const main = {
  backgroundColor: "#fff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
  fontSize: 16,
};

const logo = {
  padding: "30px 20px",
};

const containerButton = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
};

const button = {
  backgroundColor: "#e00707",
  borderRadius: 3,
  color: "#FFF",
  fontWeight: "bold",
  border: "1px solid rgb(0,0,0, 0.1)",
  cursor: "pointer",
  padding: "12px 30px",
};

const content = {
  border: "1px solid rgb(0,0,0, 0.1)",
  borderRadius: "3px",
  overflow: "hidden",
};

const image = {
  maxWidth: "100%",
};

const boxInfos = {
  padding: "20px",
};

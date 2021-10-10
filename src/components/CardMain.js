import { Avatar, Card, Row, Col } from "antd";
import Meta from "antd/lib/card/Meta";
import React from "react";

const Cardmain = () => {
  return (
    <div>
      <Row>
        <Col>
          <Card style={{ width: 300, marginTop: 16 }} size="lg">
            <Meta
              avatar={<Avatar src="" />}
              title="Vision"
              description="Be an excellent technical club in imparting and enhancing the technical and soft-skills of individuals to benefit the society with new ideas and innovation."
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Cardmain;

import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export default function SignUp() {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {}, [history]);

  return (
    <div>
      <Container>
        <h3>High Scores</h3>
      </Container>
    </div>
  );
}
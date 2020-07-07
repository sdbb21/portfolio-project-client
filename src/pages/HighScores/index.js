import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import ScoreRow from "../../components/Scores/ScoreRow";
import { useDispatch, useSelector } from "react-redux";
import { getScores } from "../../store/score/actions";
import { selectScores } from "../../store/score/selectors";
import { useHistory } from "react-router-dom";

export default function SignUp() {
  const dispatch = useDispatch();
  const history = useHistory();

  const allScores = useSelector(selectScores);

  useEffect(() => {
    dispatch(getScores());
  }, [dispatch]);

  return (
    <div>
      <Card border="dark">
        <div>
          <h3>
            {" "}
            <span role="img" aria-label="bids">
              🤑
            </span>{" "}
            Top 10{" "}
            <span role="img" aria-label="bids">
              🤑
            </span>
          </h3>
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Score</th>
                <th scope="col">Player</th>
              </tr>
            </thead>
            <tbody>
              {allScores.map((score, i) => (
                <ScoreRow
                  key={score.id}
                  id={score.id}
                  position={i}
                  score={score.score}
                  name={score.user.name}
                />
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}

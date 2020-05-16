import React, { Fragment } from "react";
import { Table } from "react-bootstrap";
import "./progtab.css";

function ProgTab1() {
  return (
    <Fragment>
      <div className="tb1-blck">
        <Table className="table" responsive>
          <thead>
            <tr>
              <th className="tb-hd">UNDERGRDUATE DIRECTION</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a href="/#">03/03/01 Psychology ( OFO )</a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="/#">
                  03/03/01 Advertising and public relations (OFO, ZFO)
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="# ">44.03.01 Pedagogical education</a>
              </td>
            </tr>
            <tr>
              <td>
                <a id="link" href="# ">
                  44.03.02 Psychological and pedagogical education
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="# ">44.03.03 Special (Defectological) education</a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="# ">
                  44.03.05 Pedagogical education (with two training profiles )
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="# ">03/03/01 Physical education</a>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Fragment>
  );
}

// From Master Program

function ProgTab4() {
  return (
    <Fragment>
      <div className="tb4-blck">
        <Table className="table" responsive>
          <thead>
            <tr>
              <th className="tb-hd">MASTER'S DIRECTIONS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a href="/#">04/04/01 Psychology</a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="/#">04/40/01 Advertising and public relations (ZFO)</a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="# ">04.04.01 Pedagogical education</a>
              </td>
            </tr>
            <tr>
              <td>
                <a id="link" href="# ">
                  04.04.02 Psychological and pedagogical education
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="# ">04/04/01 Physical education</a>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Fragment>
  );
}

function ProgTab3() {
  return (
    <Fragment>
      <div className="tb3-blck">
        <Table className="table" responsive>
          <thead>
            <tr>
              <th className="tb-hd">SPECIALTY DIRECTIONS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a href="/#">05/05/01 Psychology of performance</a>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Fragment>
  );
}

function ProgTab2() {
  return (
    <Fragment>
      <div className="tb2-blck">
        <Table className="table" responsive>
          <thead>
            <tr>
              <th className="tb-hd">POSTGRADUATE STUDIES</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a href="/#">37.00.00 Psychological sciences</a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="/#">39.00.00 Sociology and social work</a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="# ">44.00.00 Education and pedagogical sciences</a>
              </td>
            </tr>
            <tr>
              <td>
                <a id="link" href="# ">
                  45.00.00 Linguistics and literary criticism
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="# ">
                  47.00.00 Philosophy, Ethics and Religious Studies
                </a>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Fragment>
  );
}


export { ProgTab1, ProgTab2, ProgTab3, ProgTab4};

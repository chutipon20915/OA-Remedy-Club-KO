import React, { useState } from "react";
import "./Form.css";
import Navbar from "../components/Navbar";

//import axios from "axios";

function Form() {
  const [values, setValues] = useState({
    fname: "",
    lname: "",
    phase: "",
    question1: "",
    question2: "",
    question3: "",
    question4: "",
    question5: "",
    question6: "",
  });

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:5000/health", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => {
        alert("ส่งแบบฟอร์มเสร็จแล้ว");
        window.location = "/login";
      })
      .catch((err) => {
        alert("ส่งแบบฟอร์มไม่เสร็จ");
      });
  };
  return (
    <>
      <div className="Header">
        <Navbar />
        <h1>แบบฟอร์มการให้คะแนนหลังออกกำลังกายเสร็จ</h1>
      </div>
      <div className="App">
        <form action="" onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="mb-3">
              <label htmlFor="fname">
                <strong>ชื่อ</strong>
              </label>
              <input
                type="text"
                placeholder="กรุณาใส่ชื่อ"
                name="fname"
                onChange={handleInput}
                className="form-control rounded-0"
              />
            </div>
          </div>

          <div className="form-group">
            <div className="mb-3">
              <label htmlFor="lname">
                <strong>นามสกุล</strong>
              </label>
              <input
                type="text"
                placeholder="กรุณาใส่นามสกุล"
                name="lname"
                onChange={handleInput}
                className="form-control rounded-0"
              />
            </div>
          </div>

          <div className="form-group">
            <div className="mb-3">
              <label htmlFor="fname">
                <strong>ระยะที่</strong>
              </label>
              <input
                type="text"
                placeholder="กรุณาใส่ระยะที่เป็น"
                name="phase"
                onChange={handleInput}
                className="form-control rounded-0"
              />
            </div>
          </div>

          <div className="form-group">
            <div className="mb-3">
              <label htmlFor="fname">
                <strong>
                  1. ขณะตอนนี้ ปวดมากน้อยแค่ไหน? (ระดับความปวด 10 คือ ปวดมาก, 0
                  คือ ไม่ปวด )
                </strong>
              </label>
              <input
                type="text"
                placeholder="กรุณาใส่ระดับความปวด 0-10"
                name="question1"
                onChange={handleInput}
                className="form-control rounded-0"
              />
            </div>
          </div>

          <div className="form-group">
            <div className="mb-3">
              <label htmlFor="fname">
                <strong>
                  2. เดินบนพื้นราบ ปวดมากน้อยแค่ไหน? (ระดับความปวด 10 คือ
                  ปวดมาก, 0 คือ ไม่ปวด )
                </strong>
              </label>
              <input
                type="text"
                placeholder="กรุณาใส่ระดับความปวด 0-10"
                name="question2"
                onChange={handleInput}
                className="form-control rounded-0"
              />
            </div>
          </div>

          <div className="form-group">
            <div className="mb-3">
              <label htmlFor="fname">
                <strong>
                  3. เดินขึ้นลงบันได ปวดมากน้อยแค่ไหน? (ระดับความปวด 10 คือ
                  ปวดมาก, 0 คือ ไม่ปวด )
                </strong>
              </label>
              <input
                type="text"
                placeholder="กรุณาใส่ระดับความปวด 0-10"
                name="question3"
                onChange={handleInput}
                className="form-control rounded-0"
              />
            </div>
          </div>

          <div className="form-group">
            <div className="mb-3">
              <label htmlFor="fname">
                <strong>
                  4. ขณะนอนบนเตียง ปวดมากน้อยแค่ไหน? (ระดับความปวด 10 คือ
                  ปวดมาก, 0 คือ ไม่ปวด )
                </strong>
              </label>
              <input
                type="text"
                placeholder="กรุณาใส่ระดับความปวด 0-10"
                name="question4"
                onChange={handleInput}
                className="form-control rounded-0"
              />
            </div>
          </div>

          <div className="form-group">
            <div className="mb-3">
              <label htmlFor="fname">
                <strong>
                  5. ขณะลุกนั่ง ปวดมากน้อยแค่ไหน? (ระดับความปวด 10 คือ ปวดมาก, 0
                  คือ ไม่ปวด )
                </strong>
              </label>
              <input
                type="text"
                placeholder="กรุณาใส่ระดับความปวด 0-10"
                name="question5"
                onChange={handleInput}
                className="form-control rounded-0"
              />
            </div>
          </div>

          <div className="form-group">
            <div className="mb-3">
              <label htmlFor="fname">
                <strong>
                  6. ขณะยืนลงน้ำหนัก ปวดมากน้อยแค่ไหน? (ระดับความปวด 10 คือ
                  ปวดมาก, 0 คือ ไม่ปวด )
                </strong>
              </label>
              <input
                type="text"
                placeholder="กรุณาใส่ระดับความปวด 0-10"
                name="question6"
                onChange={handleInput}
                className="form-control rounded-0"
              />
            </div>
          </div>

          <div className="form-group">
            <button className="btn" type="submit">
              ส่งคำตอบ
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Form;

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
    //   axios
    //     .post("http://localhost:5000/health", values)
    //     .then((res) => {})
    //     .catch((err) => console.log(err));
    // };
    fetch("http://localhost:5000/health", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => {})
      .catch((err) => console.error(err));
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
            <label htmlFor="question" className="form-label">
              1. ขณะเดินขึ้น-ลง บันได ท่านมีอาการปวดข้อเข่ามากน้อยแค่ไหน?
            </label>
            <div className="All">
              <div className="first">
                <input
                  type="radio"
                  name="question1"
                  value="0=ไม่เคยเลย"
                  onChange={handleInput}
                />
                <label htmlFor="male">0=ไม่เคยเลย</label>
              </div>
              <div className="second">
                <input
                  type="radio"
                  name="question1"
                  value="1=เป็นบ้างบางครั้ง"
                  onChange={handleInput}
                />
                <label htmlFor="female">1=เป็นบ้างบางครั้ง</label>
              </div>
              <div className="last">
                <input
                  type="radio"
                  name="question1"
                  value="2=เป็นประจำ"
                  onChange={handleInput}
                />
                <label htmlFor="other">2=เป็นประจำ</label>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="question" className="form-label">
              2. ขณะยืน ท่านสามารถทำได้มากน้อยแค่ไหน?
            </label>
            <div className="All">
              <div className="first">
                <input
                  type="radio"
                  name="question2"
                  value="0=ไม่เคยเลย"
                  onChange={handleInput}
                />
                <label htmlFor="male">0=ไม่เคยเลย</label>
              </div>
              <div className="second">
                <input
                  type="radio"
                  name="question2"
                  value="1=เป็นบ้างบางครั้ง"
                  onChange={handleInput}
                />
                <label htmlFor="female">1=เป็นบ้างบางครั้ง</label>
              </div>
              <div className="last">
                <input
                  type="radio"
                  name="question2"
                  value="2=เป็นประจำ"
                  onChange={handleInput}
                />
                <label htmlFor="other">2=เป็นประจำ</label>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="question" className="form-label">
              3. ขณะเดินบนพื้นราบ ท่านสามารถทำได้มากน้อยแค่ไหน?
            </label>
            <div className="All">
              <div className="first">
                <input
                  type="radio"
                  name="question3"
                  value="0=ไม่เคยเลย"
                  onChange={handleInput}
                />
                <label htmlFor="male">0=ไม่เคยเลย</label>
              </div>
              <div className="second">
                <input
                  type="radio"
                  name="question3"
                  value="1=เป็นบ้างบางครั้ง"
                  onChange={handleInput}
                />
                <label htmlFor="female">1=เป็นบ้างบางครั้ง</label>
              </div>
              <div className="last">
                <input
                  type="radio"
                  name="question3"
                  value="2=เป็นประจำ"
                  onChange={handleInput}
                />
                <label htmlFor="other">2=เป็นประจำ</label>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="question" className="form-label">
              4. เมื่อต้องขึ้น-ลง รถยนต์ ท่านสามารถทำได้มากน้อยแค่ไหน?
            </label>
            <div className="All">
              <div className="first">
                <input
                  type="radio"
                  name="question4"
                  value="0=ไม่เคยเลย"
                  onChange={handleInput}
                />
                <label htmlFor="male">0=ไม่เคยเลย</label>
              </div>
              <div className="second">
                <input
                  type="radio"
                  name="question4"
                  value="1=เป็นบ้างบางครั้ง"
                  onChange={handleInput}
                />
                <label htmlFor="female">1=เป็นบ้างบางครั้ง</label>
              </div>
              <div className="last">
                <input
                  type="radio"
                  name="question4"
                  value="2=เป็นประจำ"
                  onChange={handleInput}
                />
                <label htmlFor="other">2=เป็นประจำ</label>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="question" className="form-label">
              5. ขณะใส่หรือถอดกางเกง ท่านสามารถทำได้มากน้อยแค่ไหน?
            </label>
            <div className="All">
              <div className="first">
                <input
                  type="radio"
                  name="question5"
                  value="0=ไม่เคยเลย"
                  onChange={handleInput}
                />
                <label htmlFor="male">0=ไม่เคยเลย</label>
              </div>
              <div className="second">
                <input
                  type="radio"
                  name="question5"
                  value="1=เป็นบ้างบางครั้ง"
                  onChange={handleInput}
                />
                <label htmlFor="female">1=เป็นบ้างบางครั้ง</label>
              </div>
              <div className="last">
                <input
                  type="radio"
                  name="question5"
                  value="2=เป็นประจำ"
                  onChange={handleInput}
                />
                <label htmlFor="other">2=เป็นประจำ</label>
              </div>
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

import React, { Component } from "react";
import ReactDOM from "react-dom";
import { VerifyCodePanel } from "@ctrip/pay";

ReactDOM.render(
  <div>
    <VerifyCodePanel
      title="手机验证"
      subTitle="已向您的绑定手机136****5678发送短信验证码"
      length={6}
      autoConfirm={true}
      onSubmit={() => {
        console.log("submit");
      }}
      getCode={() => {
        console.log("getCode");
      }}
      visiable={true}
      timerCount={120}
      timerTitle="重新获取"
      timerEnd={() => {
        console.log("timerEnd");
      }}
      onChangeText={() => {
        console.log("onChangeText");
      }}
      buttonText="提交"
      onClose={() => {
        setVisiable(false);
      }}
    />
  </div>,
  document.getElementById("root")
);

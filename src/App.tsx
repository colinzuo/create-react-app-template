import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { ConfigProvider, DatePicker, message } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import moment, { Moment } from 'moment';
import 'moment/locale/zh-cn';

import store from './lib/redux';
import InboxScreen from './components/InboxScreen';

import './App.css';

moment.locale('zh-cn');

function App() {
  const [date, setDate] = useState<Moment | null>(null);
  const handleChange = (value: Moment | null) => {
    message.info(
      `您选择的日期是: ${value ? value.format('YYYY年MM月DD日') : '未选择'}`
    );
    setDate(value);
  };

  return (
    <ConfigProvider locale={zhCN}>
      <Provider store={store}>
        <div style={{ width: 400, margin: '100px auto' }}>
          <DatePicker onChange={handleChange} />
          <div style={{ marginTop: 16 }}>
            当前日期：{date ? date!.format('YYYY年MM月DD日') : '未选择'}
          </div>
        </div>

        <InboxScreen />
      </Provider>
    </ConfigProvider>
  );
}
export default App;

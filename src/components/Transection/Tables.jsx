import React, { useState } from "react";
import { Tabs, Table } from "antd";

const { TabPane } = Tabs;

const Tables = () => {
  const [activeKey, setActiveKey] = useState("1");

  const onChange = (key) => {
    setActiveKey(key);
  };

  const columns = [
    {
      title: "Description",
      dataIndex: "description",
    },
    {
      title: "Transaction ID",
      dataIndex: "transactionId",
    },
    {
      title: "Type",
      dataIndex: "type",
    },
    {
      title: "Card",
      dataIndex: "card",
    },
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Amount",
      dataIndex: "amount",
    },
    {
      title: "Receipt",
      dataIndex: "receipt",
    },
  ];

  const allTransactions = Array.from({ length: 6 }).map((_, i) => ({
    key: i,
    description: `Transaction ${i + 1}`,
    transactionId: `ID${i + 1}`,
    type: 'All',
    card: `Card ${i + 1}`,
    date: `2024-07-${i + 1}`,
    amount: `${i + 1}00`,
    receipt: `Receipt ${i + 1}`,
  }));

  const incomeTransactions = Array.from({ length: 6 }).map((_, i) => ({
    key: i,
    description: `Income ${i + 1}`,
    transactionId: `ID${i + 1}`,
    type: 'Income',
    card: `Card ${i + 1}`,
    date: `2024-07-${i + 1}`,
    amount: `${i + 1}00`,
    receipt: `Receipt ${i + 1}`,
  }));

  const expenseTransactions = Array.from({ length: 6 }).map((_, i) => ({
    key: i,
    description: `Expense ${i + 1}`,
    transactionId: `ID${i + 1}`,
    type: 'Expense',
    card: `Card ${i + 1}`,
    date: `2024-07-${i + 1}`,
    amount: `${i + 1}00`,
    receipt: `Receipt ${i + 1}`,
  }));

  const dataSource = activeKey === "1" ? allTransactions : activeKey === "2" ? incomeTransactions : expenseTransactions;

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;

  return (
    <div>
      <Tabs defaultActiveKey="1" activeKey={activeKey} onChange={onChange}>
        <TabPane tab="All Transactions" key="1">
          <div>
            <div gap="middle" vertical>
              <div align="center" gap="middle">
                {hasSelected ? `Selected ${selectedRowKeys.length} items` : null}
              </div>
              <Table
                rowSelection={rowSelection}
                columns={columns}
                dataSource={dataSource}
              />
            </div>
          </div>
        </TabPane>
        <TabPane tab="Income" key="2">
          <div>
            <div gap="middle" vertical>
              <div align="center" gap="middle">
                {hasSelected ? `Selected ${selectedRowKeys.length} items` : null}
              </div>
              <Table
                rowSelection={rowSelection}
                columns={columns}
                dataSource={dataSource}
              />
            </div>
          </div>
        </TabPane>
        <TabPane tab="Expense" key="3">
          <div>
            <div gap="middle" vertical>
              <div align="center" gap="middle">
                {hasSelected ? `Selected ${selectedRowKeys.length} items` : null}
              </div>
              <Table
                rowSelection={rowSelection}
                columns={columns}
                dataSource={dataSource}
              />
            </div>
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Tables;

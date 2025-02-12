'use client'
import Card from "@/components/basic/Card";
import Table from "@/components/basic/Table";
import FormInput from "@/components/basic/FormInput";
import {useState} from "react";

const TodoListPage = () => {
  const [page, setPage] = useState({
    currentPage: "1",
    maxPages: "5",
  })
  const data = [
    {
      name: "John Doe",
      position: "Software Engineer",
      role: "Engineer",
    },
    {
      name: "Alex",
      position: "Administrator",
      role: "Administrator",
    }
  ]
  const columns = [
    "name", "position", "role",
  ]
  const onPageChange = (e) => {
    setPage({
      ...page,
      currentPage: e,
    });
  }
  console.log(page)
  return (
    <div className="flex flex-col gap-7">
      <Card title={"Filter"}>
        <FormInput type={"text"} label={"Name"}/>
      </Card>
      <Card title={"Users"}>
        <Table data={data} page={page} columns={columns} pageChange={onPageChange}/>
      </Card>
    </div>
  );
};

export default TodoListPage;
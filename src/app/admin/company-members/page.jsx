'use client'
import Card from "@/components/basic/Card";
import {getListUsersByCompanyId} from "../../../../service/companyService";
import {useEffect, useState} from "react";
import Table from "@/components/basic/Table";

const Page = () => {
  const companyId = localStorage.getItem("companyId");
  const [users, setUsers] = useState([])

  const [page, setPage] = useState({
    currentPage: "1",
    maxPages: "",
  })

  // const onPageChange = (e) => {
  //   setPage({
  //     ...page,
  //     currentPage: e,
  //   });
  // }
  const fetchCompanyUsers = async () => {
    if (companyId) {
      const data = await getListUsersByCompanyId(companyId)
      console.log(data)
      setUsers(data.data)
      setPage({
        currentPage: "1",
        maxPages: data.metadata.maxPage,
      })
    }
  }

  useEffect(() => {
    fetchCompanyUsers()
  }, [companyId]);

  return (
    <Card title={"Members"}>
      <Table data={users} columns={["fullname", "created_at"]} />
    </Card>
  );
};

export default Page;
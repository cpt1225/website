'use client'

import { User } from "@/app/api/user/route";
import request from "@/lib/axios";
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import React, { useCallback, useEffect, useState } from "react";

function formatTime(isoTime: Date) {
  const date = new Date(isoTime);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day}-${hours}-${minutes}-${seconds}`;
}

const Page = () => {

  const [users, setUsers] = useState<User[]>([])


  useEffect(() => {
    const fetchUsers = async () => {
      const res = await request({
        url: 'http://127.0.0.1:3000/api/user',
        method: 'GET',
      })
      setUsers(res.data.data)
    }

    fetchUsers().then(() => {})
  }, [])

  const renderCell = useCallback((user: User, columnKey: React.Key) => {
    const cellValue = user[columnKey as keyof User]

    switch (columnKey) {
      case "avatar":
        return <div>{user.avatar}</div>
      case "username":
        return <div>{user.username}</div>
      case "email":
        return <div>{user.email}</div>
      case "power":
        return <div>{user.power}</div>
      case "login":
        return <span>{formatTime(new Date(user.login))}</span>
      case "actions":
        return <div className={"relative flex items-center gap-2"}>
          <svg
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
            width="18" height="18"
          >
            <path
              d="M246.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 402.7 361.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 210.7 361.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z"/>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
            width="18" height="18"
          >
            <path
              d="M246.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 109.3 361.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160zm160 352l-160-160c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 301.3 361.4 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3z"/>
          </svg>
        </div>
      default:
        return cellValue
    }
  }, [])

  const columns = [
    {name: "头像", uid: "avatar"},
    {name: "用户名", uid: "username"},
    {name: "邮箱", uid: "email"},
    {name: "权限", uid: "power"},
    {name: "最近登录时间", uid: "login"},
    {name: "操作", uid: "actions"}
  ];

  return (
    <Table className={"h-full w-full"} aria-label="Users">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={users}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

export default Page;

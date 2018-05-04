# VM 設定 - 共享資料夾

## 檢查現有使用者 `user`具有哪些群組

```bash
$ id user
# uid=1002(user) gid=1002(user) groups=1002(user),27(sudo)
```

## 為使用者 `user` 加入群組 `vboxsf`

```bash
$ sudo usermod -a -G vboxsf user
```

## 再次檢查群組是否加入成功

```bash
$ id user
#  uid=1002(user) gid=1002(user) groups=1002(user),27(sudo),113(vboxsf)
```

> 完成此步驟後請關閉 VM 重新啟動。

## 加入本機端共享資料夾

![vm-shared-folder](assets/vm-shared-folder.png)

## 建立 VM 端掛載點

以下指令將建立叫作 `shared` 的空資料夾。

```bash
$ mkdir ~/workspace/shared
```

## 掛載本機端資料夾到 VM 中

以下指令將把先前步驟加入的共享資料夾 `_playg` 掛載到空白資料夾 `shared` 中。

```bash
# vboxsf 為共享資料夾之掛載類型
$ sudo mount -t vboxsf _playg ~/workspace/shared
```

> 此步驟完成後，應可在 C9 左側樹狀目錄中看見剛才新增的 `shared` 出現本機端的資料。

---

## 參考

- [How to access a shared folder in VirtualBox? - Ask Ubuntu](https://askubuntu.com/questions/161759/how-to-access-a-shared-folder-in-virtualbox)
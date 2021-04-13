## 说明文档

### 官方文档地址

https://hexo.io/zh-cn/

### 使用步骤

```bash
npm install hexo-cli -g
hexo init blog
cd blog
npm install
```

#### 局部安装

```bash
npx hexo server
```

或者：

```bash
npm run server
```

#### 全局安装

```bash
hexo server
```

### 热更新

1：全局安装 browser-sync

```bash
npm install -g browser-sync
```

2：局部安装

```bash
npm install hexo-browsersync --save
```

3：启动

```bash
hexo s
```

4：服务器地址为 http://localhost:4000/

### 使用

#### 新建写作

```bash
hexo new 写作名称
```

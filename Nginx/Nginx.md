## Nginx
### Ngnix 简介
Nginx 如同 Apache 是一种 Web 服务器。以 ~~统一资源描述符~~ URI 或者 ~~统一资源定位符~~ URL 作为沟通依据，通过 HTTP 协议提供 各种网络服务。

Apache 稳定，开源，跨平台，但是是设计为重量级的，在数以万计的高并发访问中，会导致服务器消耗大量内存。操作系统对其进行进程或线程间的切换也消耗了大量的 CPU 资源，导致 HTTP 请求的平均响应速度降低。

> 这些都决定了 Apache 不可能成为高性能 Web 服务器，轻量级高并发服务器 Nginx 就应运而生了。

Nginx 使用 基于 **事件驱动** 架构，使其可以支持数以百万级别的 TCP 连接。 ~~并且开源，跨平台。~~

### About 代理

> 如同生活中的专卖店，客人到 adidas 专卖店买了一双鞋，这个专卖店就是代理，被代理角色就是 adidas 厂家，目标角色就是用户。

#### 正向代理
> FQ 的方式主要是找到一个可以访问国外网站的代理服务器，我们将请求发送给代理服务器，代理服务器去访问国外的网站，然后将访问到的数据传递给我们！

~~上述这样的代理模式称为正向代理~~

正向代理的特点：
- 客户端非常明确要访问的服务器地址；
- 服务器只清楚请求来自哪个代理服务器(VPS)，不清楚具体的客户端。

**正向代理模式屏蔽或者隐藏了真实客户端信息。**

#### 反向代理
> 举例如我国的某宝网站，每天同时连接到网站的访问人数已经爆表，单个服务器远远不能满足人民日益增长的购买欲望了。

> 此时就出现了一个大家耳熟能详的名词：分布式部署；也就是通过部署多台服务器来解决访问人数限制的问题。

多个客户端给服务器发送的请求，Nginx 服务器接收到之后，按照一定的规则分发给了后端的业务处理服务器进行处理了。
- 请求来源(客户端)是明确的，但是请求具体由那台服务器处理就不明确。


**主要用于服务器集群分布式部署的情况下，反向代理隐藏了服务器的信息**

![image](https://pics7.baidu.com/feed/d8f9d72a6059252d6eccb68824d5ea3e5ab5b933.jpeg?token=d18b5471e2eb91e26998c72a71de5031&s=48281C7209876F4B18DDD9DB0300E0B1)

#### 负载均衡
负载量
- 客户端发送的
- Nginx 反向代理服务器接收到的请求数量

请求数量按照一定的规则进行分发，到不同的服务器处理的规则，就是一种均衡规则。

**所以将服务器接收到的请求按照规则分发的过程，称为负载均衡。**

*硬件负载均衡和软件负载均衡*

**硬件负载均衡**也称为硬负载，如 F5 负载均衡，相对造价昂贵成本较高。但是数据的稳定性安全性等等有非常好的保障。~~如中国移动中国联通这样的公司才会选择硬负载进行操作。~~

考虑到成本，会选择使用**软件负载均衡**，软件负载均衡是利用现有的技术结合主机硬件实现的一种消息队列分发机制。



Nginx 支持的负载均衡调度算法方式如下：

①**weight 轮询**（默认）：接收到的请求按照顺序逐一分配到不同的后端服务器，即使在使用过程中，某一台后端服务器宕机，Nginx 会自动将该服务器剔除出队列，请求受理情况不会受到任何影响。

这种方式下，可以给不同的后端服务器设置一个权重值（weight），用于调整不同的服务器上请求的分配率。

权重数据越大，被分配到请求的几率越大；该权重值，主要是针对实际工作环境中不同的后端服务器硬件配置进行调整的。

②**ip_hash**：每个请求按照发起客户端的 ip 的 hash 结果进行匹配，这样的算法下一个固定 ip 地址的客户端总会访问到同一个后端服务器，这也在一定程度上解决了集群部署环境下 Session 共享的问题。

③**fair**：智能调整调度算法，动态的根据后端服务器的请求处理到响应的时间进行均衡分配。

响应时间短处理效率高的服务器分配到请求的概率高，响应时间长处理效率低的服务器分配到的请求少，它是结合了前两者的优点的一种调度算法。

**但是需要注意的是 Nginx 默认不支持 fair 算法，如果要使用这种调度算法，请安装 upstream_fair 模块。**

④**url_hash**：按照访问的 URL 的 hash 结果分配请求，每个请求的 URL 会指向后端固定的某个服务器，可以在 Nginx 作为静态服务器的情况下提高缓存效率。

**同样要注意 Nginx 默认不支持这种调度算法，要使用的话需要安装 Nginx 的 hash 软件包。**

![image](https://pics3.baidu.com/feed/2fdda3cc7cd98d10dbbf91702e71510b7aec90d8.jpeg?token=95c4261794ef7422a5b01ca0881dcd03&s=35187C33515F45CE4ADD11CA0300D0B1)

#### Nginx使用
Nginx 在做反向代理时，根据不同的正则匹配，采用不同的转发策略。

Nginx配置文件结构


```
  ...   #全局块
  
  events{   #events块
      ...
  }
  
  http  #http块
  {
      ...    #http全局块
      
        server  #server块
        {   
            ...   #server全局块
        
            location [PATTERN]    #location块
            {
                ...
            }
        
            location [PATTERN] 
            {
                ...
            }
         }
      
        server
        {
          ...
        }
        
        ...    #http全局块
  }
```
##### 全局块:

配置影响nginx全局的指令.如
- 运行nginx服务器的用户组
- biginx进程pid存放路径
- 日志存放路径
- 配置文件引入
- 允许生成worker process数 等

##### events块:

配置影响nginx服务器或与用户的网络连接,如
- 每个进程的最大连接数
- 选取哪种事件驱动模型处理连接请求
- 是否允许同时接受多个网路连接/
- 开启多个网络连接序列化 等

##### http块:

可嵌套多个server,配置代理,缓存,日志定义等绝大多数功能和第三方模块的配置,如
- 文件引入
- mime-type定义
- 日志自定义
- 是否使用sendfile传输文件
- 连接超时时间
- 单连接请求数 等

##### server块:

配置虚拟主机的相关参数，一个http中可以有多个server。

##### location块:

配置请求的路由，以及各种页面的处理情况。


例子:
```
########### 每个指令必须有分号结束。#################
#user administrator administrators;  #配置用户或者组，默认为nobody nobody。
#worker_processes 2;  #允许生成的进程数，默认为1
#pid /nginx/pid/nginx.pid;   #指定nginx进程运行文件存放地址
error_log log/error.log debug;  #制定日志路径，级别。这个设置可以放入全局块，http块，server块，级别以此为：debug|info|notice|warn|error|crit|alert|emerg
events {
    accept_mutex on;   #设置网路连接序列化，防止惊群现象发生，默认为on
    multi_accept on;  #设置一个进程是否同时接受多个网络连接，默认为off
    #use epoll;      #事件驱动模型，select|poll|kqueue|epoll|resig|/dev/poll|eventport
    worker_connections  1024;    #最大连接数，默认为512
}
http {
    include       mime.types;   #文件扩展名与文件类型映射表
    default_type  application/octet-stream; #默认文件类型，默认为text/plain
    #access_log off; #取消服务日志    
    log_format myFormat '$remote_addr–$remote_user [$time_local] $request $status $body_bytes_sent $http_referer $http_user_agent $http_x_forwarded_for'; #自定义格式
    access_log log/access.log myFormat;  #combined为日志格式的默认值
    sendfile on;   #允许sendfile方式传输文件，默认为off，可以在http块，server块，location块。
    sendfile_max_chunk 100k;  #每个进程每次调用传输数量不能大于设定的值，默认为0，即不设上限。
    keepalive_timeout 65;  #连接超时时间，默认为75s，可以在http，server，location块。

    upstream mysvr {   
      server 127.0.0.1:7878;
      server 192.168.10.121:3333 backup;  #热备
    }
    error_page 404 https://www.baidu.com; #错误页
    server {
        keepalive_requests 120; #单连接请求上限次数。
        listen       4545;   #监听端口
        server_name  127.0.0.1;   #监听地址       
        location  ~*^.+$ {       #请求的url过滤，正则匹配，~为区分大小写，~*为不区分大小写。
           #root path;  #根目录
           #index vv.txt;  #设置默认页
           proxy_pass  http://mysvr;  #请求转向mysvr 定义的服务器列表
           deny 127.0.0.1;  #拒绝的ip
           allow 172.18.5.54; #允许的ip           
        } 
    }
}
```

使用宝塔面板 PM2+Nginx 实现 通过只对域名的访问，Nginx反向代理至node项目运行端口


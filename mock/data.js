let successData = {
  "success": true,
  "code": "000000",
  "msg": "操作成功",
  "data": {
    "regInfo": {
      "domain": "aliyun.com", //域名
      "star_time": "2007-09-28T04:09:56-0700", //注册时间
      "end_time": "2018-09-28T00:00:00-0700", //结束时间
      "registrar": "MarkMonitor, Inc.", //注册商
      "status": [ //域名状态，有一至多个
        "clientUpdateProhibited (https://www.icann.org/epp#clientUpdateProhibited)",
        "clientTransferProhibited (https://www.icann.org/epp#clientTransferProhibited)",
        "clientDeleteProhibited (https://www.icann.org/epp#clientDeleteProhibited)",
        "serverUpdateProhibited (https://www.icann.org/epp#serverUpdateProhibited)",
        "serverTransferProhibited (https://www.icann.org/epp#serverTransferProhibited)",
        "serverDeleteProhibited (https://www.icann.org/epp#serverDeleteProhibited)"
      ],
      "link_man": "Alibaba Cloud Computing Ltd. (阿里云计算有限公司)", //域名所有者
      "link_man_email": "dnsadmin@hk.alibaba-inc.com", //联系邮箱
      "DNSServer": [ //DNS服务器
        "ns3.aliyun.com",
        "ns4.aliyun.com",
        "ns5.aliyun.com"
      ]
    },
    //详细信息
    "allInfo": "Domain Name: aliyun.com\nRegistry Domain ID: 1244776076_DOMAIN_COM-VRSN\nRegistrar WHOIS Server: whois.markmonitor.com\nRegistrar URL: http://www.markmonitor.com\nUpdated Date: 2017-07-05T09:22:52-0700\nCreation Date: 2007-09-28T04:09:56-0700\nRegistrar Registration Expiration Date: 2018-09-28T00:00:00-0700\nRegistrar: MarkMonitor, Inc.\nRegistrar IANA ID: 292\nRegistrar Abuse Contact Email: abusecomplaints@markmonitor.com\nRegistrar Abuse Contact Phone: +1.2083895740\nDomain Status: clientUpdateProhibited (https://www.icann.org/epp#clientUpdateProhibited)\nDomain Status: clientTransferProhibited (https://www.icann.org/epp#clientTransferProhibited)\nDomain Status: clientDeleteProhibited (https://www.icann.org/epp#clientDeleteProhibited)\nDomain Status: serverUpdateProhibited (https://www.icann.org/epp#serverUpdateProhibited)\nDomain Status: serverTransferProhibited (https://www.icann.org/epp#serverTransferProhibited)\nDomain Status: serverDeleteProhibited (https://www.icann.org/epp#serverDeleteProhibited)\nRegistry Registrant ID: \nRegistrant Name: Timothy Alexander Steinert\nRegistrant Organization: Alibaba Cloud Computing Ltd. (阿里云计算有限公司)\nRegistrant Street: 5A Building D Xihu International Technology Bldg, 391 Wen Er Road\nRegistrant City: Hangzhou\nRegistrant State/Province: Zhejiang\nRegistrant Postal Code: 310099\nRegistrant Country: CN\nRegistrant Phone: +852.22155100\nRegistrant Phone Ext: \nRegistrant Fax: +852.22155200\nRegistrant Fax Ext: \nRegistrant Email: dnsadmin@hk.alibaba-inc.com\nRegistry Admin ID: \nAdmin Name: Timothy Alexander Steinert\nAdmin Organization: Alibaba Cloud Computing Ltd. (阿里云计算有限公司)\nAdmin Street: 5A Building D Xihu International Technology Bldg, 391 Wen Er Road\nAdmin City: Hangzhou\nAdmin State/Province: Zhejiang\nAdmin Postal Code: 310099\nAdmin Country: CN\nAdmin Phone: +852.22155100\nAdmin Phone Ext: \nAdmin Fax: +852.22155200\nAdmin Fax Ext: \nAdmin Email: dnsadmin@hk.alibaba-inc.com\nRegistry Tech ID: \nTech Name: Timothy Alexander Steinert\nTech Organization: Alibaba Cloud Computing Ltd. (阿里云计算有限公司)\nTech Street: 5A Building D Xihu International Technology Bldg, 391 Wen Er Road\nTech City: Hangzhou\nTech State/Province: Zhejiang\nTech Postal Code: 310099\nTech Country: CN\nTech Phone: +852.22155100\nTech Phone Ext: \nTech Fax: +852.22155200\nTech Fax Ext: \nTech Email: dnsadmin@hk.alibaba-inc.com\nName Server: ns3.aliyun.com\nName Server: ns4.aliyun.com\nName Server: ns5.aliyun.com\nDNSSEC: unsigned\nURL of the ICANN WHOIS Data Problem Reporting System: http://wdprs.internic.net/\n&gt;&gt;&gt; Last update of WHOIS database: 2017-12-05T18:04:50-0800 &lt;&lt;&lt;\n\nThe Data in MarkMonitor.com's WHOIS database is provided by MarkMonitor.com for\ninformation purposes, and to assist persons in obtaining information about or\nrelated to a domain name registration record.  MarkMonitor.com does not guarantee\nits accuracy.  By submitting a WHOIS query, you agree that you will use this Data\nonly for lawful purposes and that, under no circumstances will you use this Data to:\n (1) allow, enable, or otherwise support the transmission of mass unsolicited,\n     commercial advertising or solicitations via e-mail (spam); or\n (2) enable high volume, automated, electronic processes that apply to\n     MarkMonitor.com (or its systems).\nMarkMonitor.com reserves the right to modify these terms at any time.\nBy submitting this query, you agree to abide by this policy.\n\nMarkMonitor is the Global Leader in Online Brand Protection.\n\nMarkMonitor Domain Management(TM)\nMarkMonitor Brand Protection(TM)\nMarkMonitor AntiPiracy(TM)\nMarkMonitor AntiFraud(TM)\nProfessional and Managed Services\n\nVisit MarkMonitor at http://www.markmonitor.com\nContact us at +1.8007459229\nIn Europe, at +44.02032062220\n\nFor more information on Whois status codes, please visit\n https://www.icann.org/resources/pages/epp-status-codes-2014-06-16-en\n--\n"
  }
}


let failData = {
  "success": false,
  "code": "300000",
  "msg": "该域名可能尚未注册",
  "data": []
}


module.exports = {
  successData,
  failData
}
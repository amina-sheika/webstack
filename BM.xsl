<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" 
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
            </head>
            <body>
                <h1 style="text-align:center">Blood Donor Details</h1>
                
                <table border="2" align="center">
                    <tr >
                        
                        <th>name</th>
                        <th>sex</th>
                        <th>age</th>
                        <th>blood-group</th>
                        <th>quantity</th>
                        <th>contact</th>
                        <th>date</th>
                        
                    </tr>
                    <xsl:for-each select="Bloodbank/details/donor">
                        <xsl:sort select = "name"/>
                        <xsl:if test="age &gt; 18">
                            <tr >

                                <xsl:choose>
                                    <xsl:when test="quantity &gt; 5">
                                        <td bgcolor="#ff00ff">
                                            <xsl:value-of select="name"/>
                                        </td>
                                    </xsl:when>
                                    <xsl:otherwise>
                                        <td>
                                            <xsl:value-of select="name"/>
                                        </td>
                                    </xsl:otherwise>
                                </xsl:choose>
                                
                                <td>
                                    <xsl:value-of select="sex"></xsl:value-of>
                                </td>
                                <td>
                                    <xsl:value-of select="age"></xsl:value-of>
                                </td>
                                <td>
                                    <xsl:value-of select="blood-group"></xsl:value-of>
                                </td>

                                <td>
                                    <xsl:value-of select="quantity"></xsl:value-of>
                                </td>
                                <td>
                                    <xsl:value-of select="contact"></xsl:value-of>
                                </td>
                                <td>
                                    <xsl:value-of select="date"></xsl:value-of>
                                </td>
                                
                                

                            </tr>
                        </xsl:if>
                    </xsl:for-each>
                </table>
                <br>
                    <br>
                    </br>
                </br>
                
                
                <h1 style="text-align:center">Blood Donor Details</h1>
                <xsl:apply-templates/>
            </body>
        </html>
          
    </xsl:template>

    <xsl:template match="cd">
        <p>
            <xsl:apply-templates select="name"/>
            <xsl:apply-templates select="sex"/>
            <xsl:apply-templates select="age"/>
            <xsl:apply-templates select="blood-group"/>
            <xsl:apply-templates select="quantity"/>
            <xsl:apply-templates select="contact"/>
            <xsl:apply-templates select="date"/>
            
        </p>
    </xsl:template>

    <xsl:template match="name">
        Name: <span style="color:#ff0000">
            <xsl:value-of select="."/>
        </span>
        <br />
    </xsl:template>
    

    <xsl:template match="sex">
        Sex: <span style="color:#00ff00">
            <xsl:value-of select="."/>
        </span>
        <br />
    </xsl:template>
    <xsl:template match="age">
        Age: <span style="color:#ff0000">
            <xsl:value-of select="."/>
        </span>
        <br />
    </xsl:template>

    <xsl:template match="blood-group">
        blood-group: <span style="color:#00ff00">
            <xsl:value-of select="."/>
        </span>
        <br />
    </xsl:template>
    <xsl:template match="quantity">
        Quantity: <span style="color:#ff0000">
            <xsl:value-of select="."/>
        </span>
        <br />
    </xsl:template>

    <xsl:template match="contact">
        Contact: <span style="color:#00ff00">
            <xsl:value-of select="."/>
        </span>
        <br />
    </xsl:template>
    <xsl:template match="date">
        Contact: <span style="color:#00ff00">
            <xsl:value-of select="."/>
        </span>
        <br />
    </xsl:template>
</xsl:stylesheet>
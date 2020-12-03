<xsl:stylesheet
        xmlns:xs="http://www.w3.org/2001/XMLSchema"
        xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
        xmlns:fo="http://www.w3.org/1999/XSL/Format"
        xmlns:x="http://www.jirsak.org/2020/XSLT-service"
        version="3.0">
    <xsl:output encoding="UTF-8" method="xml" media-type="application/pdf" x:file-name="jidelnicek.pdf"/>
    <xsl:template match="/">
        <fo:root>
            <fo:layout-master-set>
                <fo:simple-page-master master-name="page"
                                       page-height="210mm"
                                       page-width="148mm">
                    <fo:region-body margin-top="5mm" margin-bottom="5mm" margin-left="10mm" margin-right="10mm"/>
                    <fo:region-after extent="5mm"/>
                </fo:simple-page-master>
                <fo:simple-page-master master-name="info"
                                       page-height="210mm"
                                       page-width="148mm">
                    <fo:region-body margin="5mm"/>
                </fo:simple-page-master>
            </fo:layout-master-set>
            <fo:page-sequence master-reference="page" font-family="Open Sans" font-size="11pt">
                <fo:static-content flow-name="xsl-region-after">
                    <fo:block text-align="center" font-size="8pt">Vytvořeno aplikací
                        <fo:inline font-weight="bold">
                            <fo:basic-link external-destination="https://www.online-jidelnicek.cz">www.online-jidelnicek.cz</fo:basic-link>
                        </fo:inline>
                        <xsl:text>.</xsl:text>
                    </fo:block>
                </fo:static-content>
                <fo:flow flow-name="xsl-region-body">
                    <fo:block text-align="center" margin-bottom="2mm" font-size="16pt">
                        Jídelníček
                    </fo:block>
                    <xsl:apply-templates select="/json/json"/>
                </fo:flow>
            </fo:page-sequence>
            <fo:page-sequence master-reference="info" font-family="Open Sans" font-size="8pt">
                <fo:flow flow-name="xsl-region-body">
                    <xsl:call-template name="info-nadpis">
                        <xsl:with-param name="text">Informace k jídelníčku</xsl:with-param>
                    </xsl:call-template>
                    <fo:block text-align="justify">Jídelníček obsahuje stanovené gramáže jídel, které jsou spočítány tak, aby to vyhovovalo požadavkům tvého
                        těla, aktuálnímu pohybu, zvolenému cíli a požadovanému zastoupení právě jednotlivých makroživin. Jednotlivé gramáže jsou vždy v syrovém
                        stavu.
                    </fo:block>
                    <fo:block text-align="justify" text-indent="3mm">Aplikace zatím generuje pouze jídelníček na jeden den, ale brzy se dočkáš více variant,
                        které budou kaloricky podobné. Proto pokud ti vážení potravin nebude vycházet přesně na gram a nebo sníš o zrnko rýže víc než stanovil
                        jídelníček, rozhodně se nestresuj.
                    </fo:block>
                    <fo:block text-align="justify" text-indent="3mm">V jídelníčku je stanovená kalorická rezerva, která slouží pro zeleninu, oleje, popřípadě
                        zdravé omáčky. Není proto nutné si cokoliv z receptů dopočítávat. Doporučujeme ke každému jídlu přidat alespoň 100 g zeleniny (ke
                        sladkým nemusíš). Ideálně každý den přijmout 500 g zeleniny ale meze se zde nekladou. Převažovat by měli především okurky, saláty,
                        papriky, brokolice a houby. Tuto zeleninu je vhodné doplňovat rajčaty, řepou, mrkví kukuřicí apod. Není nutné jíst jen zelenou zeleninu,
                        která má nejméně kcal, ale je dobré to střídat a zařadit různé druhy pro co nejkomplexnější příjem všech živin.
                    </fo:block>
                    <xsl:call-template name="info-nadpis">
                        <xsl:with-param name="text">Výběr potravin dle jídelníčku</xsl:with-param>
                    </xsl:call-template>
                    <fo:block font-weight="bold" margin-top="1mm">Ovoce</fo:block>
                    <fo:block text-align="justify">V jídelníčku je nejvíce započítáván banán. Pokud ho budeš chtít zaměnit, vynásob množství banánu následujícím
                        koeficientem:
                    </fo:block>
                    <fo:table border-width="0.1mm" border-style="solid" margin-top="1mm" margin-bottom="1mm">
                        <fo:table-column column-width="12%"/>
                        <fo:table-column column-width="12%"/>
                        <fo:table-column column-width="28%"/>
                        <fo:table-column column-width="12%"/>
                        <fo:table-column column-width="12%"/>
                        <fo:table-column column-width="12%"/>
                        <fo:table-column column-width="12%"/>
                        <fo:table-body>
                            <fo:table-row>
                                <fo:table-cell border-width="0.1mm" border-style="solid">
                                    <fo:block text-align="center">Jablko</fo:block>
                                </fo:table-cell>
                                <fo:table-cell border-width="0.1mm" border-style="solid">
                                    <fo:block text-align="center">Pomeranč</fo:block>
                                </fo:table-cell>
                                <fo:table-cell border-width="0.1mm" border-style="solid">
                                    <fo:block text-align="center">Lesní ovoce mražené</fo:block>
                                </fo:table-cell>
                                <fo:table-cell border-width="0.1mm" border-style="solid">
                                    <fo:block text-align="center">Mango</fo:block>
                                </fo:table-cell>
                                <fo:table-cell border-width="0.1mm" border-style="solid">
                                    <fo:block text-align="center">Ananas</fo:block>
                                </fo:table-cell>
                                <fo:table-cell border-width="0.1mm" border-style="solid">
                                    <fo:block text-align="center">Hruška</fo:block>
                                </fo:table-cell>
                                <fo:table-cell border-width="0.1mm" border-style="solid">
                                    <fo:block text-align="center">Meloun</fo:block>
                                </fo:table-cell>
                            </fo:table-row>
                            <fo:table-row>
                                <fo:table-cell border-width="0.1mm" border-style="solid">
                                    <fo:block text-align="center">1,7</fo:block>
                                </fo:table-cell>
                                <fo:table-cell border-width="0.1mm" border-style="solid">
                                    <fo:block text-align="center">1,9</fo:block>
                                </fo:table-cell>
                                <fo:table-cell border-width="0.1mm" border-style="solid">
                                    <fo:block text-align="center">2,2</fo:block>
                                </fo:table-cell>
                                <fo:table-cell border-width="0.1mm" border-style="solid">
                                    <fo:block text-align="center">1,3</fo:block>
                                </fo:table-cell>
                                <fo:table-cell border-width="0.1mm" border-style="solid">
                                    <fo:block text-align="center">1,7</fo:block>
                                </fo:table-cell>
                                <fo:table-cell border-width="0.1mm" border-style="solid">
                                    <fo:block text-align="center">1,6</fo:block>
                                </fo:table-cell>
                                <fo:table-cell border-width="0.1mm" border-style="solid">
                                    <fo:block text-align="center">3,3</fo:block>
                                </fo:table-cell>
                            </fo:table-row>
                        </fo:table-body>
                    </fo:table>
                    <fo:block text-align="justify">Znamená to, že pokud budeš mít v jídelníčku 100 g banánu, dáš si 160 g hrušky.</fo:block>
                    <fo:block font-weight="bold" margin-top="1mm">Ořechy</fo:block>
                    <fo:block text-align="justify">Jednotlivé druhy ořechů (nepražené/nesolené) můžeš mezi sebou zaměnit v poměru 1:1. V případě pekanových
                        ořechů pouze
                        sniž jejich gramáž
                        o 20  %, protože mají vyšší množství tuku. Ořechy můžeme nahradit avokádem a to v poměru 1:3 ve prospěch avokáda. Pokud budeš zaměňovat
                        právě za avokádo, doporučuji např. rozmačkat avokádo, přidat sůl, pepř a trochu česneku a máš skvělou avokádovou pomazánku. Ořechy můžeš
                        vyměnit také za ořechové máslo ve stejném poměru.
                    </fo:block>
                    <fo:block font-weight="bold" margin-top="1mm">Ovesné vločky</fo:block>
                    <fo:block text-align="justify">Ovesné vločky můžeš nahradit např. žitnými, pohankovými, rýžovými, jáhlovými vločkami či jinými v poměru
                        1:1.
                    </fo:block>
                    <fo:block font-weight="bold" margin-top="1mm">Rýže</fo:block>
                    <fo:block text-align="justify">Ideální je typ rýže střídat. Můžeme zařadit např. basmati, jasmínovou nebo rýži natural, což je rýže
                        neloupaná.
                    </fo:block>
                    <fo:block font-weight="bold" margin-top="1mm">Celozrnné pečivo</fo:block>
                    <fo:block text-align="justify">Žitné pečivo můžeš nahradit knäckebrotem v poměru 3:2. V praxi to znamená, že když máš v jídelníčku 60 g
                        žitného pečiva,
                        tak si dáš 40 g knäckebrotu nebo ve stejném poměru rýžový chlebíček. Ve stejném poměru jako je v jídelníčku započítán žitný chléb můžeš
                        volit chléb
                        ze žitného šrotu.
                    </fo:block>
                    <fo:block font-weight="bold" margin-top="1mm">Těstoviny</fo:block>
                    <fo:block text-align="justify">Kupuj ideálně celozrnné žitné/špaldové/pohankové či jiné s minimálním podílem klasické pšeničné mouky.
                    </fo:block>
                    <fo:block font-weight="bold" margin-top="1mm">Omáčky</fo:block>
                    <fo:block text-align="justify">Pokud budeš mít chuť na omáčku, vyhni se kupovaným hotovým omáčkám, raději si udělej vlastní např. ze 100%
                        rajčatového
                        protlaku, trochou
                        kokosového mléka nebo jídlo doplň lžičkou kečupu (např. Hellmans kečup se stévií či hořčicí bez cukru).
                    </fo:block>
                    <fo:block font-weight="bold" margin-top="1mm">Vejce</fo:block>
                    <fo:block text-align="justify">Gramáž v jídelníčku přepočítej takto:</fo:block>
                    <fo:table border-width="0.1mm" border-style="solid" margin-top="1mm" margin-bottom="1mm">
                        <fo:table-column column-width="33%"/>
                        <fo:table-column column-width="34%"/>
                        <fo:table-column column-width="33%"/>
                        <fo:table-body>
                            <fo:table-row>
                                <fo:table-cell border-width="0.1mm" border-style="solid">
                                    <fo:block text-align="center">Vajíčko vel. S</fo:block>
                                </fo:table-cell>
                                <fo:table-cell border-width="0.1mm" border-style="solid">
                                    <fo:block text-align="center">Vajíčko vel. M</fo:block>
                                </fo:table-cell>
                                <fo:table-cell border-width="0.1mm" border-style="solid">
                                    <fo:block text-align="center">Vajíčko vel. L</fo:block>
                                </fo:table-cell>
                            </fo:table-row>
                            <fo:table-row>
                                <fo:table-cell border-width="0.1mm" border-style="solid">
                                    <fo:block text-align="center">35 – 53 g</fo:block>
                                </fo:table-cell>
                                <fo:table-cell border-width="0.1mm" border-style="solid">
                                    <fo:block text-align="center">53 – 63 g</fo:block>
                                </fo:table-cell>
                                <fo:table-cell border-width="0.1mm" border-style="solid">
                                    <fo:block text-align="center">63 – 73 g</fo:block>
                                </fo:table-cell>
                            </fo:table-row>
                        </fo:table-body>
                    </fo:table>
                    <fo:block text-align="justify">Gramy v jídelníčku zaokrouhlete nahoru tak, aby vám to vyšlo na celé vajíčko. Samozřejmě nemusíme řešit, že
                        sníte gram
                        navíc. Jediné co je důležité je, že ve žloutku se nachází choresterol a je tučný. Proto je zdravé sníst jich za den maximálně ze dvou
                        vajíček.
                        Doporučuje proto doplnit do porce samotné bílky. Prodávají se samostatně jen bílky např. v Makru.
                    </fo:block>
                    <fo:block text-align="justify" margin-top="3mm">Za celý tým
                        <fo:basic-link external-destination="https://www.online-jidelnicek.cz">online-jidelnicek.cz</fo:basic-link>
                        ti přejeme ten nejpohodovější první krok k tvému cíli.
                    </fo:block>
                </fo:flow>
            </fo:page-sequence>
        </fo:root>
    </xsl:template>
    <xsl:template match="/json/json">
        <fo:block-container margin-bottom="5mm">
            <fo:block background-color="#EEE" padding="1mm" margin-bottom="2mm">
                <xsl:value-of select="mealDev"/>
            </fo:block>
            <fo:block font-weight="bold" margin-bottom="2mm">
                <xsl:value-of select="name"/>
            </fo:block>
            <xsl:apply-templates select="ingrediences"/>
        </fo:block-container>
    </xsl:template>
    <xsl:template match="ingrediences">
        <fo:block margin-bottom="1mm" text-align="start" text-align-last="justify">
            <xsl:value-of select="name"/>
            <fo:leader leader-pattern="dots" leader-alignment="reference-area"/>
            <xsl:if test="isArbitrary = 'true'">
                <fo:inline font-style="italic" font-size="9pt">libovolné množství</fo:inline>
            </xsl:if>
            <xsl:if test="grams != 'null'">
                <xsl:value-of select="grams"/> g
            </xsl:if>
        </fo:block>
    </xsl:template>
    <xsl:template name="info-nadpis">
        <xsl:param name="text" as="xs:string"/>
        <fo:block text-align="center" font-weight="bold" margin-top="2mm" margin-bottom="1mm">
            <xsl:value-of select="$text"/>
        </fo:block>
    </xsl:template>
</xsl:stylesheet>
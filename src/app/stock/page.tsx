"use client";

import Button from "@atoms/Button/Button/Button";
import Divider from "@atoms/Divider/Divider";
import Icon from "@atoms/Icon/Icon";
import Stack from "@atoms/Stack/Stack";
import Text from "@atoms/Text/Text";
import ExpandTile from "@atoms/Tile/ExpandTile";
import Tile from "@atoms/Tile/Tile";

const Stock = () => {
  return (
    <>
      <Stack direction="row" justifyContent="between" className="w-desktop-12">
        <Stack direction="row" gap="s">
          <Tile>
            <Button variant="text" icon={<Icon icon="setting" />}></Button>
          </Tile>
          <Tile>
            <Button variant="text" icon={<Icon icon="setting" />}></Button>
          </Tile>
          <Tile>
            <Button variant="text" icon={<Icon icon="setting" />}></Button>
          </Tile>
        </Stack>
        <Stack direction="row" gap="s">
          <Tile>
            <Button variant="text" icon={<Icon icon="setting" />}></Button>
          </Tile>
          <Tile>
            <Button variant="text" icon={<Icon icon="setting" />}></Button>
          </Tile>
        </Stack>
      </Stack>
      <Stack direction="row" gap={"m"} className="w-desktop-12">
        <Stack className="w-desktop-8" gap="m">
          <Tile padding="2xl">
            <Stack direction="row" justifyContent="between" className="w-full">
              <Stack direction="row" gap="l">
                <div className="w-[72px] h-full bg-primary rounded-circle" />
                <Stack>
                  <Text size="headline1" bold>
                    Apple Inc
                  </Text>
                  <Stack direction="row" gap="s">
                    <Text color="primary" bold>
                      APPL
                    </Text>
                    <Divider
                      direction="vertical"
                      length="h-full"
                      color="outlineVariant"
                      thickness="s"
                    />
                    <Stack direction="row" gap="xs">
                      <div className="w-[32px] h-[20px] bg-primary"></div>
                      <Text color="onSurfaceVariant">NASDAQ</Text>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
              <Stack>
                <Text size="headline1" bold>
                  $ 4,148.37
                </Text>
                <Stack direction="row" gap="s" justifyContent="end">
                  <Text size="body2" bold>
                    ▲ +1.69
                  </Text>
                  <Text size="body2" bold>
                    ▲ 0.80%
                  </Text>
                </Stack>
              </Stack>
            </Stack>
          </Tile>
          <Tile className="h-[496px]" padding="2xl">
            <Stack className="w-full" gap="m">
              <Stack direction="row" justifyContent="between">
                <Stack direction="row" itemAligns="center" gap="xs">
                  <div className="w-[12px] h-[12px] bg-primary rounded-circle"></div>
                  <Text color="primary" bold>
                    실시간
                  </Text>
                </Stack>
                <Stack direction="row" gap="xs">
                  <div className="bg-secondary py-2xs px-s rounded-circle">
                    <Text color="onSecondary">1일</Text>
                  </div>
                  <div className="bg-surface-variant-high py-2xs px-s rounded-circle">
                    <Text color="onSurfaceVariant">1주</Text>
                  </div>
                  <div className="bg-surface-variant-high py-2xs px-s rounded-circle">
                    <Text color="onSurfaceVariant">1달</Text>
                  </div>
                  <div className="bg-surface-variant-high py-2xs px-s rounded-circle">
                    <Text color="onSurfaceVariant">1년</Text>
                  </div>
                  <div className="bg-surface-variant-high py-2xs px-s rounded-circle">
                    <Text color="onSurfaceVariant">최대</Text>
                  </div>
                </Stack>
              </Stack>
              <div className="w-full h-[400px] bg-primary rounded-m"></div>
              <Stack direction="row" justifyContent="center" className="w-full" gap="xs">
                <div className="bg-surface-variant-high py-2xs px-s rounded-circle">
                  <Stack direction="row" itemAligns="center" gap="xs">
                    <div className="w-[12px] h-[12px] bg-primary rounded-circle"></div>
                    <Text color="onSurfaceVariant">APPL</Text>
                  </Stack>
                </div>
                <div className="bg-surface-variant-high py-2xs px-s rounded-circle">
                  <Stack direction="row" itemAligns="center" gap="xs">
                    <div className="w-[12px] h-[12px] bg-magenta rounded-circle"></div>
                    <Text color="onSurfaceVariant">TSLA</Text>
                  </Stack>
                </div>
                <div className="bg-surface-variant-high py-2xs px-s rounded-circle">
                  <Stack direction="row" itemAligns="center" gap="xs">
                    <div className="w-[12px] h-[12px] bg-green rounded-circle"></div>
                    <Text color="onSurfaceVariant">MSFT</Text>
                  </Stack>
                </div>
              </Stack>
            </Stack>
          </Tile>
          <ExpandTile collapseHeight="max-h-[384px]">
            <Stack>
              <Text size="headline2" bold>
                투자 정보
              </Text>
              <Stack
                direction="row"
                className="w-full"
                justifyContent="between"
                itemAligns="center"
              >
                <Stack className="w-1/2" gap="s">
                  <Text size="headline3" bold>
                    매출
                  </Text>
                  <div className="bg-primary h-[240px]"></div>
                </Stack>
                <Divider
                  direction="vertical"
                  length="h-[240px]"
                  className="mx-xl"
                  thickness="s"
                  color="outlineVariant"
                />
                <Stack className="w-1/2" gap="s">
                  <Text size="headline3" bold>
                    영업이익
                  </Text>
                  <div className="bg-primary h-[240px]"></div>
                </Stack>
              </Stack>
            </Stack>
          </ExpandTile>
          <Tile width="w-desktop-8" padding="2xl">
            <Stack gap="m">
              <Text size="headline2" bold>
                뉴스
              </Text>
              <Stack gap="m">
                <Stack direction="row" justifyContent="between">
                  <Stack className="flex-1" gap="3xs">
                    <Stack direction="row" gap="xs">
                      <Text color="primary" size="body3" bold>
                        Business
                      </Text>
                      <Text color="onSurfaceVariant" size="body3">
                        Routre • 2일 전
                      </Text>
                    </Stack>
                    <Stack>
                      <Text bold color="onSurface">
                        ‘YOLO’ spenders are propping up the economy, says Wharton professor Jeremy
                        Siegel—but
                      </Text>
                      <Text color="onSurfaceVariant">
                        There is one catalyst that could shake the current slow-paced bull market
                        into a faster-paced, higher-octane type of rally, to the mo...
                      </Text>
                    </Stack>
                  </Stack>
                  <div className="w-[120px] h-[120px] bg-primary rounded-m"></div>
                </Stack>
                <Divider length="w-full" color="outlineVariant" thickness="s" />
                <Stack direction="row" justifyContent="between">
                  <Stack className="flex-1" gap="3xs">
                    <Stack direction="row" gap="xs">
                      <Text color="primary" size="body3" bold>
                        Business
                      </Text>
                      <Text color="onSurfaceVariant" size="body3">
                        Routre • 2일 전
                      </Text>
                    </Stack>
                    <Stack>
                      <Text bold color="onSurface">
                        ‘YOLO’ spenders are propping up the economy, says Wharton professor Jeremy
                        Siegel—but
                      </Text>
                      <Text color="onSurfaceVariant">
                        There is one catalyst that could shake the current slow-paced bull market
                        into a faster-paced, higher-octane type of rally, to the mo...
                      </Text>
                    </Stack>
                  </Stack>
                  <div className="w-[120px] h-[120px] bg-primary rounded-m"></div>
                </Stack>
                <Divider length="w-full" color="outlineVariant" thickness="s" />
                <Stack direction="row" justifyContent="between">
                  <Stack className="flex-1" gap="3xs">
                    <Stack direction="row" gap="xs">
                      <Text color="primary" size="body3" bold>
                        Business
                      </Text>
                      <Text color="onSurfaceVariant" size="body3">
                        Routre • 2일 전
                      </Text>
                    </Stack>
                    <Stack>
                      <Text bold color="onSurface">
                        ‘YOLO’ spenders are propping up the economy, says Wharton professor Jeremy
                        Siegel—but
                      </Text>
                      <Text color="onSurfaceVariant">
                        There is one catalyst that could shake the current slow-paced bull market
                        into a faster-paced, higher-octane type of rally, to the mo...
                      </Text>
                    </Stack>
                  </Stack>
                  <div className="w-[120px] h-[120px] bg-primary rounded-m"></div>
                </Stack>
              </Stack>
            </Stack>
          </Tile>
        </Stack>
        <Stack className="w-desktop-4" gap="m">
          <ExpandTile collapseHeight="max-h-[384px]">
            <Stack gap="m">
              <Text size="headline2" bold>
                종목 정보
              </Text>
              <Stack gap="s">
                <Stack direction="row" justifyContent="between" className="w-full">
                  <Text>전일 종가</Text>
                  <Text bold>전일 종가</Text>
                </Stack>
                <Stack direction="row" justifyContent="between" className="w-full">
                  <Text>개장가</Text>
                  <Text bold>개장가</Text>
                </Stack>
                <Stack direction="row" justifyContent="between" className="w-full">
                  <Text>최고가</Text>
                  <Text color="red" bold>
                    최고가
                  </Text>
                </Stack>
                <Stack direction="row" justifyContent="between" className="w-full">
                  <Text>최저가</Text>
                  <Text color="primary" bold>
                    최저가
                  </Text>
                </Stack>
                <Stack direction="row" justifyContent="between" className="w-full">
                  <Text>시가 총액</Text>
                  <Text bold>시가 총액</Text>
                </Stack>
                <Stack direction="row" justifyContent="between" className="w-full">
                  <Text>거래량</Text>
                  <Text bold>거래량</Text>
                </Stack>
              </Stack>
            </Stack>
          </ExpandTile>
          <Tile padding="2xl">
            <Stack gap="s" className="w-full">
              <Text size="headline2" bold>
                요약
              </Text>
              <Stack gap="s">
                <Stack direction="row" justifyContent="between" className="w-full">
                  <Text>섹터</Text>
                  <Text bold>Technology</Text>
                </Stack>
                <Stack direction="row" justifyContent="between" className="w-full">
                  <Text>산업</Text>
                  <Text bold>Consumer Electronics</Text>
                </Stack>
                <Stack direction="row" justifyContent="between" className="w-full">
                  <Text>상장 일자</Text>
                  <Text bold>1980-12-12</Text>
                </Stack>
                <Stack direction="row" justifyContent="between" className="w-full">
                  <Text>CEO</Text>
                  <Text bold>Mr. Timothy D. Cook</Text>
                </Stack>
              </Stack>
            </Stack>
          </Tile>
          <Tile width="w-desktop-4" padding="2xl">
            <Stack className="w-full" gap="m">
              <Text size="headline2" bold>
                이런 종목은 어떠세요?
              </Text>
              <Stack gap="m">
                <Stack
                  direction="row"
                  justifyContent="between"
                  itemAligns="center"
                  className="w-full"
                >
                  <Stack direction="row" gap="m">
                    <Stack direction="row" gap="m" itemAligns="center">
                      <div className="bg-primary rounded-circle w-[48px] h-[48px]"></div>
                      <Stack>
                        <Text size="headline3" bold>
                          APPL
                        </Text>
                        <Text color="onSurfaceVariant">Apple Inc</Text>
                      </Stack>
                    </Stack>
                  </Stack>
                  <Stack itemAligns="end">
                    <Text size="headline3" bold>
                      $ 189.77
                    </Text>
                    <Text size="body1" bold>
                      +0.90%
                    </Text>
                  </Stack>
                </Stack>
                <Divider length="w-full" thickness="s" color="outlineVariant" />
                <Stack
                  direction="row"
                  justifyContent="between"
                  itemAligns="center"
                  className="w-full"
                >
                  <Stack direction="row" gap="m">
                    <Stack direction="row" gap="m" itemAligns="center">
                      <div className="bg-primary rounded-circle w-[48px] h-[48px]"></div>
                      <Stack>
                        <Text size="headline3" bold>
                          APPL
                        </Text>
                        <Text color="onSurfaceVariant">Apple Inc</Text>
                      </Stack>
                    </Stack>
                  </Stack>
                  <Stack itemAligns="end">
                    <Text size="headline3" bold>
                      $ 189.77
                    </Text>
                    <Text size="body1" bold>
                      +0.90%
                    </Text>
                  </Stack>
                </Stack>
                <Divider length="w-full" thickness="s" color="outlineVariant" />
                <Stack
                  direction="row"
                  justifyContent="between"
                  itemAligns="center"
                  className="w-full"
                >
                  <Stack direction="row" gap="m">
                    <Stack direction="row" gap="m" itemAligns="center">
                      <div className="bg-primary rounded-circle w-[48px] h-[48px]"></div>
                      <Stack>
                        <Text size="headline3" bold>
                          APPL
                        </Text>
                        <Text color="onSurfaceVariant">Apple Inc</Text>
                      </Stack>
                    </Stack>
                  </Stack>
                  <Stack itemAligns="end">
                    <Text size="headline3" bold>
                      $ 189.77
                    </Text>
                    <Text size="body1" bold>
                      +0.90%
                    </Text>
                  </Stack>
                </Stack>
                <Divider length="w-full" thickness="s" color="outlineVariant" />
                <Stack
                  direction="row"
                  justifyContent="between"
                  itemAligns="center"
                  className="w-full"
                >
                  <Stack direction="row" gap="m">
                    <Stack direction="row" gap="m" itemAligns="center">
                      <div className="bg-primary rounded-circle w-[48px] h-[48px]"></div>
                      <Stack>
                        <Text size="headline3" bold>
                          APPL
                        </Text>
                        <Text color="onSurfaceVariant">Apple Inc</Text>
                      </Stack>
                    </Stack>
                  </Stack>
                  <Stack itemAligns="end">
                    <Text size="headline3" bold>
                      $ 189.77
                    </Text>
                    <Text size="body1" bold>
                      +0.90%
                    </Text>
                  </Stack>
                </Stack>
                <Divider length="w-full" thickness="s" color="outlineVariant" />
                <Stack
                  direction="row"
                  justifyContent="between"
                  itemAligns="center"
                  className="w-full"
                >
                  <Stack direction="row" gap="m">
                    <Stack direction="row" gap="m" itemAligns="center">
                      <div className="bg-primary rounded-circle w-[48px] h-[48px]"></div>
                      <Stack>
                        <Text size="headline3" bold>
                          APPL
                        </Text>
                        <Text color="onSurfaceVariant">Apple Inc</Text>
                      </Stack>
                    </Stack>
                  </Stack>
                  <Stack itemAligns="end">
                    <Text size="headline3" bold>
                      $ 189.77
                    </Text>
                    <Text size="body1" bold>
                      +0.90%
                    </Text>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Tile>
          <Tile padding="2xl">
            <Stack gap="s" className="w-full">
              <Text size="headline2" bold>
                투자 의견
              </Text>
              <Stack direction="row" justifyContent="between">
                <div className="w-[120px] h-[120px] bg-primary rounded-m"></div>
                <div className="w-[120px] h-[120px] bg-primary rounded-m"></div>
              </Stack>
            </Stack>
          </Tile>
        </Stack>
      </Stack>
    </>
  );
};

export default Stock;

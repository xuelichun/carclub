package com.zeepn.utils;
import java.io.File;
import java.io.IOException;
import java.util.Date;
import javax.servlet.http.HttpServletRequest;
import org.apache.commons.io.FilenameUtils;
import org.springframework.web.multipart.MultipartFile;
/**
 * 
 * @author zhoupeng
 *
 */
public class Upload {
	
	/**
	 * 上传文件
	 * @param myFile
	 * @param request
	 * @param folder
	 * @return	上传成功返回图片的服务器存储路径，否则返回null
	 * @throws IOException
	 */
	public static String uploadPicture(MultipartFile myFile,HttpServletRequest request,String folder) throws  IOException {
		if(myFile.isEmpty()){
			System.out.println("文件未上传");
			return null;
		}else{
			//获取上传服务器的绝对路径
			String realPath=request.getSession().getServletContext().getRealPath("/"+folder);
			File file=new File(realPath);
			if(!file.isDirectory()){
				file.mkdirs();
			}
			String fileName=myFile.getOriginalFilename();
			System.out.println(fileName);
			String ext=FilenameUtils.getExtension(fileName);
			System.out.println(ext);
			if(ext.equals("jpg")||ext.equals("png")||ext.equals("jpeg")){
				String newFileName=(new Date().getTime()+"_"+request.getSession().getId()+"."+ext);
					myFile.transferTo(new File(realPath+"/"+newFileName));
				System.out.println(realPath+"/"+newFileName);
				return folder+"/"+newFileName;
			}else{
				return null;
			}
		}
	}
	
	/**
	 * 删除服务器图片
	 * @param path
	 * @return 删除成功返回true，否则返回false;
	 */
	public static boolean deletePicture(String path){
		boolean flag=false;
		File file=new File(path);
		flag=file.delete();
		return flag;
	}
}

